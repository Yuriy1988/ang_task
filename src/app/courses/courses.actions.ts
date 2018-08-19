// tslint:disable: max-classes-per-file
import { Action } from '@ngrx/store';
import { Course } from '../shared/interfaces/course.model';

export enum AuthActionTypes {
  FetchCourses = '[Courses] fetch',
  FetchMore = '[Courses] fetch more',
  ReceivedCourses = '[Courses] received',
  EditCourse = '[Courses] edit',
  AddCourse = '[Courses] add',
  DeleteCourse = '[Courses] delete',
  CrudSuccess = '[Courses] success',
}

export class FetchCourses implements Action {
  readonly type = AuthActionTypes.FetchCourses;
}

export class FetchMore implements Action {
  readonly type = AuthActionTypes.FetchMore;

  constructor(public payload: { offset }) {}
}

export class ReceivedCourses implements Action {
  readonly type = AuthActionTypes.ReceivedCourses;

  constructor(public payload: { courses }) {}
}

export class EditCourse implements Action {
  readonly type = AuthActionTypes.EditCourse;

  constructor(public payload: { course: Course }) {}
}

export class AddCourse implements Action {
  readonly type = AuthActionTypes.AddCourse;

  constructor(public payload: { course: Course }) {}
}

export class DeleteCourse implements Action {
  readonly type = AuthActionTypes.DeleteCourse;

  constructor(public payload: string) {}
}

export class CrudSuccess implements Action {
  readonly type = AuthActionTypes.CrudSuccess;
}

export type CoursesActionsUnion = |
  FetchCourses |
  FetchMore |
  ReceivedCourses |
  EditCourse |
  AddCourse |
  DeleteCourse |
  CrudSuccess;
