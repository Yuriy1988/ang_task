import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as moment from 'moment';
import { Course } from '../shared/interfaces/course.interface';
import { ConfirmModalService } from '../shared/ui-components/confirm-modal/confirm-modal.service';
// tslint:disable-next-line
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
export let courses = [
  {
    id: 'id1',
    title: 'title1',
    creationDate: moment(Date.now()).add('5', 'day').toDate(),
    duration: 100,
    description,
    topRated: true,
  },
  {
    id: 'id2',
    title: 'title2',
    creationDate: moment(Date.now()).subtract('2', 'day').toDate(),
    duration: 600,
    description,
    topRated: true,
  },
  {
    id: 'id3',
    title: 'title3',
    creationDate: moment(Date.now()).subtract('110', 'day').toDate(),
    duration: 200,
    description,
    topRated: false,
  },
  {
    id: 'id4',
    title: 'title4',
    creationDate: moment(Date.now()).subtract('5', 'day').toDate(),
    duration: 80,
    description,
    topRated: true,
  },
  {
    id: 'id5',
    title: 'title5',
    creationDate: moment(Date.now()).subtract('11', 'day').toDate(),
    duration: 11,
    description,
    topRated: false,
  },
  {
    id: 'id6',
    title: 'title5',
    creationDate: moment(Date.now()).add('2', 'day').toDate(),
    duration: 6,
    description,
    topRated: true,
  },
  {
    id: 'id7',
    title: 'title5',
    creationDate: moment(Date.now()).add('11', 'day').toDate(),
    duration: 3000,
    description,
    topRated: false,
  },
];

@Injectable()
export class CoursesService {
  constructor(private confirmModalService: ConfirmModalService) {
  }

  courses = new BehaviorSubject<Course[]>(courses);

  getCourses(): Observable<Course[]> {
    return this.courses.asObservable();
  }

  addCourse(): void {
    console.log('create course');
  }

  getCourseById(id: string): Observable<Course> {
    const course = courses.find((c: Course) => c.id === id);
    return Observable.of(course);
  }

  updateCourse(id: string, course: Course): void {
    console.log(id, course);
  }

  deleteCourse(id: string): void {
    const sub = this.confirmModalService.open().subscribe((answer: boolean) => {
      if (answer) {
        courses = courses.filter(c => c.id !== id);
        this.courses.next(courses);
        sub.unsubscribe();
      }
    });
  }
}
