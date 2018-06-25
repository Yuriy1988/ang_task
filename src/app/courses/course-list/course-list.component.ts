import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

// tslint:disable-next-line
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
const courses = [
  {
    id: 'id1',
    title: 'title1',
    creationDate: 'creationDate1',
    duration: 'duration1',
    description,
  },
  {
    id: 'id2',
    title: 'title2',
    creationDate: 'creationDate2',
    duration: 'duration2',
    description,
  },
  {
    id: 'id3',
    title: 'title3',
    creationDate: 'creationDate3',
    duration: 'duration3',
    description,
  },
  {
    id: 'id4',
    title: 'title4',
    creationDate: 'creationDate3',
    duration: 'duration3',
    description,
  },
  {
    id: 'id5',
    title: 'title5',
    creationDate: 'creationDate3',
    duration: 'duration3',
    description,
  },
  {
    id: 'id6',
    title: 'title5',
    creationDate: 'creationDate3',
    duration: 'duration3',
    description,
  },
  {
    id: 'id7',
    title: 'title5',
    creationDate: 'creationDate3',
    duration: 'duration3',
    description,
  },
];


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[];

  ngOnInit() {
    this.courses = courses;
  }

  findCourse(value: string): void {
      console.log(value);
  }

  addCourse(): void {
    console.log('add course');
  }
}
