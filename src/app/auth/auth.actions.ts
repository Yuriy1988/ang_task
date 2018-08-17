// tslint:disable: max-classes-per-file
import { Action } from '@ngrx/store';
import { User } from '../core/auth/user.model';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  LoginRedirect = '[Auth] Login Redirect',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: { user: User }) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: { user: User }) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload?: object) {}
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.LoginRedirect;
}


export type AuthActionsUnion = Login
  | Logout
  | LoginSuccess
  | LoginFailure
  | LoginRedirect;
