import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Course } from '../../shared/interfaces/course.model';
import { CoursesService } from '../courses.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit, OnDestroy {
  courses: Observable<Course[]>;
  searchQuery: string;
  sub: Subscription;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  // tslint:disable-next-line
  ngOnDestroy() {
  }

  findCourse(value: string): void {
    this.searchQuery = value;
  }

  addCourse(): void {
    this.router.navigate(['courses/add']);
  }

  deleteCourse(id: string): void {
    this.sub = this.coursesService.confirmDeletion(id)
      .subscribe();
  }
}
