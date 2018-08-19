import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { first, switchMap, finalize, tap } from 'rxjs/operators';
import { User } from './user.model';
import { HttpStatusService } from '../http-status-service';
import { AppState } from '../../store-configuration';
import { select, Store } from '@ngrx/store';
import * as auth from '../../auth/auth.reducer';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {
  static baseUrl = 'http://localhost:3004/';
  constructor(
    private httpStatus: HttpStatusService,
    private store: Store<AppState>,
  ) {}

  // tslint:disable-next-line
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return this.store.pipe(
      select(auth.getUser),
      tap(() => {
        this.httpStatus.setRequestingStatus(true);
      }),
      first(),
      switchMap((user: User) => {
        let headers;

        if (user && user.fakeToken) {
          headers = req.headers
            .set('Content-Type', 'application/json')
            .set('Authorization', user.fakeToken);
        } else {
          headers = req.headers
            .set('Content-Type', 'application/json');
        }

        const authReq = req.clone({
          url: `${HTTPInterceptor.baseUrl}${req.url}`,
          headers,
        });

        return next.handle(authReq);
      }),
      finalize(() => {
        this.httpStatus.setRequestingStatus(false);
      })
    );
  }
}
