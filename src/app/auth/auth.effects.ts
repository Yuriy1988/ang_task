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

.pipe(
  map(([ user ]: [ User ]): boolean => {
    if (user) {
      this.setUserInfo(user);
      return true;
    }

    return false;
  })
);

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
            return  new LoginSuccess({ user });
          }

          return  new LoginFailure();
        }),
        catchError(error => of(new LoginFailure(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess = this.actions.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => this.router.navigate(['/']))
  );

  @Effect({ dispatch: false })
  loginRedirect = this.actions.pipe(
    ofType(AuthActionTypes.LoginRedirect, AuthActionTypes.Logout),
    tap(authed => {
      this.router.navigate(['/login']);
    })
  );

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
