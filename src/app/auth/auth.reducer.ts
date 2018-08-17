import {
  AuthActionTypes,
  AuthActionsUnion,
} from './auth.actions';
import { User } from '../core/auth/user.model';

export interface State {
  user: User;
}

const initialState: State = {
  user: undefined,
};

export function reducer(
  state: State = initialState,
  action: AuthActionsUnion
): State {
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

export const getUser = (state: State) => state.user;
