import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as auth from './auth/auth.reducer';

export interface AppState {
  router: fromRouter.RouterReducerState;
  auth: auth.AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  auth: auth.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = [storeFreeze];
