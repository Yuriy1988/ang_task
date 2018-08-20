import {
  ActionReducerMap,
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import * as auth from './auth/auth.reducer';
import * as courses from './courses/courses.reducer';

export interface AppState {
  router: fromRouter.RouterReducerState;
  courses: courses.CoursesState;
  auth: auth.AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  auth: auth.reducer,
  courses: courses.reducer,
};
