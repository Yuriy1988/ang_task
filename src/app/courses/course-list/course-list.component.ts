import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Course } from '../../shared/interfaces/course.interface';
import { CoursesService } from '../courses.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  courses: Observable<Course[]>;
  searchQuery: string;

  constructor(
    private coursesService: CoursesService,
  ) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  findCourse(value: string): void {
    this.searchQuery = value;
  }

  addCourse(): void {
    this.coursesService.addCourse();
  }

  deleteCourse(id: string): void {
    this.coursesService.deleteCourse(id);
  }
}
