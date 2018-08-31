// tslint:disable: max-classes-per-file
import { Action } from '@ngrx/store';
import { Course } from '../shared/interfaces/course.model';
import { Observable } from 'rxjs/internal/Observable';
import { Author } from '../shared/interfaces/author.model';

export enum CoursesActionTypes {
  FetchAuthors = '[Courses] fetch authors',
  FetchAuthorsSuccess = '[Courses] fetch authors success',
  FetchCourses = '[Courses] fetch',
  FindCourses = '[Courses] find',
  Paginate = '[Courses] paginate',
  FetchMore = '[Courses] fetch more',
  ReceivedCourses = '[Courses] received',
  EditCourse = '[Courses] edit',
  EditSuccess = '[Courses] edit success',
  AddCourse = '[Courses] add',
  DeleteCourse = '[Courses] delete',
  DeleteCourseSuccess = '[Courses] delete success',
  CrudSuccess = '[Courses] success',
  CrudFailure =  '[Courses] failure',
  ReceivedMoreCourses = '[Courses] received more',
}

export class FetchAuthors implements Action {
  readonly type = CoursesActionTypes.FetchAuthors;
}

export class FetchAuthorsSuccess implements Action {
  readonly type = CoursesActionTypes.FetchAuthorsSuccess;

  constructor(public payload: { authors: Author[] }) {}
}

export class FindCourses implements Action {
  readonly type = CoursesActionTypes.FindCourses;

  constructor(public payload: { query: Observable<string> }) {}
}

export class FetchCourses implements Action {
  readonly type = CoursesActionTypes.FetchCourses;
}

export class FetchMore implements Action {
  readonly type = CoursesActionTypes.FetchMore;
}

export class EditSuccess implements Action {
  readonly type = CoursesActionTypes.EditSuccess;

  constructor(public payload: { course }) {}
}

export class Paginate implements Action {
  readonly type = CoursesActionTypes.Paginate;

  constructor(public payload: { offset }) {}
}

export class ReceivedCourses implements Action {
  readonly type = CoursesActionTypes.ReceivedCourses;

  constructor(public payload: { courses }) {}
}

export class ReceivedMoreCourses implements Action {
  readonly type = CoursesActionTypes.ReceivedMoreCourses;

  constructor(public payload: { courses }) {}
}

export class EditCourse implements Action {
  readonly type = CoursesActionTypes.EditCourse;

  constructor(public payload: { id: number; course: Course }) {}
}

export class DeleteCourseSuccess implements Action {
  readonly type = CoursesActionTypes.DeleteCourseSuccess;

  constructor(public payload: { id: string }) {}
}

export class AddCourse implements Action {
  readonly type = CoursesActionTypes.AddCourse;

  constructor(public payload: { course: Course }) {}
}

export class DeleteCourse implements Action {
  readonly type = CoursesActionTypes.DeleteCourse;

  constructor(public payload: { id: string }) {}
}

export class CrudSuccess implements Action {
  readonly type = CoursesActionTypes.CrudSuccess;
}

export class CrudFailure implements Action {
  readonly type = CoursesActionTypes.CrudFailure;

  constructor(public payload?: object) {}
}


export type CoursesActionsUnion = |
  FetchAuthors |
  FetchAuthorsSuccess |
  FetchCourses |
  Paginate |
  ReceivedCourses |
  EditCourse |
  AddCourse |
  DeleteCourse |
  CrudSuccess |
  ReceivedMoreCourses |
  DeleteCourseSuccess |
  FindCourses |
  EditSuccess |
  CrudFailure;
