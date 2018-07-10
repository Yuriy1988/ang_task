import { FilterByPipe } from './../../shared/pipes/filter-by/filter-by.pipe';
import { Component, OnInit } from '@angular/core';
import { Course } from '../../shared/interfaces/course.interface';
import * as moment from 'moment';

// tslint:disable-next-line
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
export const courses = [
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


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [ FilterByPipe ],
})
export class CourseListComponent implements OnInit {
  courses: Course[];
  searchQuery: string;

  constructor(private filterBy: FilterByPipe) {}

  ngOnInit() {
    this.courses = courses;
  }

  findCourse(value: string): void {
    this.searchQuery = value;
  }

  addCourse(): void {
    console.log('add course');
  }

  deleteCourse(id: string): void {
    console.log('delete course', id);
  }
}
