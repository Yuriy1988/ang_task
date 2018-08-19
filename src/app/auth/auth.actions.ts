// tslint:disable: max-classes-per-file
import { Action } from '@ngrx/store';
import { User } from '../core/auth/user.model';

export enum AuthActionTypes {
  Register = '[Auth] Register',
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  LoginSuccess = '[Auth] Login Success',
  RegisterSuccess = '[Auth] Register Success',
  LoginFailure = '[Auth] Login Failure',
  RegisterFailure = '[Auth] Register Failure',
  LoginRedirect = '[Auth] Login Redirect',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: { user: User }) {}
}

export class Register implements Action {
  readonly type = AuthActionTypes.Register;

  constructor(public payload: { user: User }) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: { user: User }) {}
}

export class RegisterSuccess implements Action {
  readonly type = AuthActionTypes.RegisterSuccess;
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload?: object) {}
}

export class RegisterFailure implements Action {
  readonly type = AuthActionTypes.RegisterFailure;

  constructor(public payload?: object) {}
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.LoginRedirect;
}

export type AuthActionsUnion = Login
  | Logout
  | Register
  | LoginSuccess
  | RegisterSuccess
  | LoginFailure
  | RegisterFailure
  | LoginRedirect;
