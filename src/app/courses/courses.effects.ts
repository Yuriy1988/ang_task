import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, debounce, exhaustMap, filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import {
  CoursesActionTypes,
  FetchCourses,
  Paginate,
  ReceivedCourses,
  DeleteCourseSuccess,
  EditCourse,
  AddCourse,
  FetchMore,
  DeleteCourse,
  CrudSuccess,
  ReceivedMoreCourses,
  CrudFailure,
  FindCourses,
  EditSuccess,
  FetchAuthors,
  FetchAuthorsSuccess,
} from './courses.actions';

import { CoursesService } from './courses.service';
import { Course } from '../shared/interfaces/course.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store-configuration';
import { CoursesState } from './courses.reducer';
import { Observable } from 'rxjs/internal/Observable';
import { interval } from 'rxjs/internal/observable/interval';
import { Author } from '../shared/interfaces/author.model';

const debounce_time = 300;
const minSearchLength = 2;

@Injectable()
export class CoursesEffects {
  @Effect()
  fetchCourses = this.actions.pipe(
    ofType<FetchCourses>(CoursesActionTypes.FetchCourses),
    exhaustMap(() => {
      return this.coursesService.fetchCourses().pipe(
        map((courses: Course[]) => {
          if (courses) {
            return new ReceivedCourses({ courses });
          }
        }),
        catchError(error => of(new CrudFailure(error)))
      );
    }),
  );

  @Effect()
  fetchAuthors = this.actions.pipe(
    ofType<FetchAuthors>(CoursesActionTypes.FetchAuthors),
    exhaustMap(() => {
      return this.coursesService.fetchAuthors().pipe(
        map((authors: Author[]) => {
          if (authors) {
            return new FetchAuthorsSuccess({ authors });
          }
        }),
        catchError(error => of(new CrudFailure(error)))
      );
    }),
  );

  @Effect()
  fetchMore = this.actions.pipe(
    ofType<FetchMore>(CoursesActionTypes.FetchMore),
    withLatestFrom(this.store, (action, state) => state.courses.pagination),
    exhaustMap(({ currentPage, itemsPerPage }: CoursesState['pagination']) => (
      this.coursesService.fetchCourses(currentPage + itemsPerPage, itemsPerPage).pipe(
        switchMap((courses: Course[]) => (
          of(
            new Paginate({ offset: currentPage + itemsPerPage }),
            new ReceivedMoreCourses({ courses }),
          )
        )),
        catchError(error => of(new CrudFailure(error)))
      )
    )),
  );

  @Effect()
  findCourses = this.actions.pipe(
    ofType<FindCourses>(CoursesActionTypes.FindCourses),
    switchMap(action => action.payload.query),
    filter((q: string) => q && q.length > minSearchLength || !q),
    debounce(() => interval(debounce_time)),
    switchMap((q): Observable<Course[]> => {
      return this.coursesService.findCourse(q);
    }),
    map((courses: Course[]) => {
      return new ReceivedCourses({ courses });
    })
  );

  @Effect()
  addCourse = this.actions.pipe(
    ofType<AddCourse>(CoursesActionTypes.AddCourse),
    map(action => action.payload.course),
    switchMap((course: Course) => {
      return this.coursesService.addCourse(course);
    }),
    map(() => {
      return new FetchCourses();
    })
  );

  @Effect()
  editCourse = this.actions.pipe(
    ofType<EditCourse>(CoursesActionTypes.EditCourse),
    map(action => action.payload),
    switchMap(({ id, course }): Observable<Course> => {
      return this.coursesService.updateCourse(id, course);
    }),
    map((course: Course) => {
      return new EditSuccess({ course });
    })
  );

  @Effect()
  deleteCourse = this.actions.pipe(
    ofType<DeleteCourse>(CoursesActionTypes.DeleteCourse),
    map(action => action.payload),
    map(({ id }) => {
      if (id) {
        return new DeleteCourseSuccess({ id });
      }
    }),
    catchError(error => of(new CrudFailure(error)))
  );

  @Effect()
  logout = this.actions.pipe(
    ofType<CrudSuccess>(CoursesActionTypes.CrudSuccess),
    map(() => new FetchCourses()),
  );

  constructor(
    private actions: Actions,
    private coursesService: CoursesService,
    private router: Router,
    private store: Store<AppState>
  ) {}
}
