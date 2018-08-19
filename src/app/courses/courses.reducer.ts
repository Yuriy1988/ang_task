import {
  AuthActionTypes,
  AuthActionsUnion,
} from './courses.actions';
import { User } from '../core/auth/user.model';
import { createSelector } from '@ngrx/store';
import { AppState } from '../store-configuration';

export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: undefined,
};

export function reducer(
  state: AuthState = initialState,
  action: AuthActionsUnion
): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        user: action.payload.user,
      };

    case AuthActionTypes.Logout:
      return {
        ...state,
        user: undefined,
      };

    default:
      return state;
  }
}

export const selectUser = (state: AppState) => state.auth.user;

export const getUser = createSelector(
  selectUser,
);

export const getUserEmail = createSelector(
  selectUser,
  (user) => user && user.email,
);

export const isAuthenticated = createSelector(
  selectUser,
  (user) => Boolean(user && user.fakeToken),
);
