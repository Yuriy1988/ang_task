import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import {
  AuthActionTypes,
  Login,
  LoginSuccess,
  Register,
  LoginFailure,
  RegisterSuccess,
  RegisterFailure,
} from './courses.actions';

import { User } from '../core/auth/user.model';
import { AuthService } from '../core/auth/auth.service';

@Injectable()
export class AuthEffects {
  @Effect()
  login = this.actions.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload),
    exhaustMap((auth: User) => {
      return this.authService.login(auth).pipe(
        map((users: User[]) => {
          if (users[0]) {
            return new LoginSuccess({ user: users[0] });
          }

          return new LoginFailure();
        }),
        catchError(error => of(new LoginFailure(error)))
      );
    }),
  );

  @Effect()
  register = this.actions.pipe(
    ofType<Register>(AuthActionTypes.Register),
    map(action => action.payload),
    exhaustMap((auth: User) => {
      return this.authService.register(auth).pipe(
        map((user: User) => {
          if (user) {
            return new RegisterSuccess();
          }

          return new RegisterFailure();
        }),
        catchError(error => of(new RegisterFailure(error)))
      );
    }),
  );

  @Effect({ dispatch: false })
  logout = this.actions.pipe(
    ofType<Login>(AuthActionTypes.Logout),
    tap(() => {
      localStorage.setItem('email', '');
      localStorage.setItem('fakeToken', '');
    }),
  );

  @Effect({ dispatch: false })
  loginSuccess = this.actions.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => this.router.navigate(['/courses']))
  );

  @Effect({ dispatch: false })
  registerSuccess = this.actions.pipe(
    ofType(AuthActionTypes.RegisterSuccess),
    tap(() => this.router.navigate(['/login']))
  );

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
