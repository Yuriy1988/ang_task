import { createSelector } from '@ngrx/store';
import { AppState } from '../store-configuration';
import { Course } from '../shared/interfaces/course.model';
import { CoursesActionsUnion, CoursesActionTypes, EditSuccess } from './courses.actions';

export interface CoursesState {
  courseList: Course[];
  pagination: {
    currentPage: number;
    itemsPerPage: number;
  };
}

const initialState: CoursesState = {
  courseList: [],
  pagination: {
    currentPage: 0,
    itemsPerPage: 5,
  },
};

export function reducer(
  state: CoursesState = initialState,
  action: CoursesActionsUnion,
): CoursesState {
  switch (action.type) {
    case CoursesActionTypes.ReceivedCourses:
      return {
        ...state,
        courseList: action.payload.courses,
      };

    case CoursesActionTypes.ReceivedMoreCourses:
      return {
        ...state,
        courseList: state.courseList.concat(action.payload.courses),
      };

    case CoursesActionTypes.Paginate:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.payload.offset,
        },
      };

    case CoursesActionTypes.DeleteCourseSuccess:
      return {
        ...state,
        courseList: state.courseList.filter(c => c.id !== action.payload.id),
      };

    case CoursesActionTypes.EditSuccess:
      return {
        ...state,
        courseList: state.courseList.map(c => c.id === action.payload.course.id
          ? action.payload.course
          : c
        ),
      };

    default:
      return state;
  }
}

export const selectCourses = (state: AppState) => state.courses.courseList;

export const getCourses = createSelector(
  selectCourses,
);

