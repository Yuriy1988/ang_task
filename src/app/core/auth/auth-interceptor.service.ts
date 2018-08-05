import { AuthService } from './auth.service';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { first, switchMap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  static baseUrl = 'http://localhost:3004/';
  constructor(private auth: AuthService) {}

  // tslint:disable-next-line
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return this.auth.getUserInfo()
      .pipe(
        first(),
        switchMap((user: User) => {
          const headers = req.headers
            .set('Authorization', user.fakeToken)
            .set('Content-Type', 'application/json');

          const authReq = req.clone({
            url: `${AuthInterceptor.baseUrl}${req.url}`,
            headers,
          });

          return next.handle(authReq);
        })
    );
  }
}
