import { AuthService } from './auth.service';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { first, switchMap, finalize, tap } from 'rxjs/operators';
import { User } from './user.model';
import { HttpStatusService } from '../http-status-service';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {
  static baseUrl = 'http://localhost:3004/';
  constructor(
    private auth: AuthService,
    private httpStatus: HttpStatusService,
  ) {}

  // tslint:disable-next-line
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return this.auth.getUserInfo()
      .pipe(
        tap(() => {
          this.httpStatus.setRequestingStatus(true);
        }),
        first(),
        switchMap((user: User) => {
          const headers = req.headers
            .set('Authorization', user.fakeToken)
            .set('Content-Type', 'application/json');

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
