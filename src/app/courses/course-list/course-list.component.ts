import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Course } from '../../shared/interfaces/course.model';
import { CoursesService } from '../courses.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { tap } from 'rxjs/operators';

@AutoUnsubscribe()
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit, OnDestroy {
  courses: Observable<Course[]>;
  sub: Subscription;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.fetchCourses();
  }

  // tslint:disable-next-line
  ngOnDestroy() {
  }

  findCourse(query: string) {
    this.courses = this.coursesService.findCourse(query);
  }

  addCourse(): void {
    this.router.navigate(['courses/add']);
  }


  deleteCourse(id: string): void {
    this.sub = this.coursesService.confirmDeletion(id)
      .pipe(
        tap(() => this.fetchCourses())
      )
      .subscribe();
  }

  goToEditPage(id: string): void {
    this.router.navigate(['courses', id]);
  }

  loadMore(): void {
    this.coursesService.loadMore();
  }

  private fetchCourses() {
    this.courses = this.coursesService.getCourses();
  }
}
