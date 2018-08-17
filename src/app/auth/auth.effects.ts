import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import {
  AuthActionTypes,
  Login,
  LoginSuccess,
  Logout,
  LoginFailure,
  AuthActionsUnion,
} from './auth.actions';

import { Action } from '@ngrx/store';
import { User } from '../core/auth/user.model';
import { AuthService } from '../core/auth/auth.service';

@Injectable()
export class AuthEffects {
  @Effect()
  login = this.actions.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload),
    exhaustMap((auth: User) =>
      this.authService.login(auth).pipe(
        map((user: User) => {
          if (user) {
            return new LoginSuccess({ user });
          }

          return new LoginFailure();
        }),
        catchError(error => of(new LoginFailure(error)))
      ),
    ),
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
    tap(() => this.router.navigate(['/']))
  );

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
