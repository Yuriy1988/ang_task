import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Course } from '../../shared/interfaces/course.model';
import { CoursesService } from '../courses.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store-configuration';
import {
  DeleteCourse,
  FetchCourses,
  FetchMore,
  FindCourses
} from '../courses.actions';
import * as courses from '../courses.reducer';

@AutoUnsubscribe()
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit, OnDestroy {
  courses: Observable<Course[]>;
  deletionSub: Subscription;
  searchSub: Subscription;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.getCourses();
  }

  // tslint:disable-next-line
  ngOnDestroy() {
  }

  findCourse(query: Observable<string>) {
   this.store.dispatch(new FindCourses({ query }));
  }

  addCourse(): void {
    this.router.navigate(['courses/add']);
  }

  deleteCourse(id: string): void {
    this.deletionSub = this.coursesService.confirmDeletion(id)
      .subscribe(() => this.store.dispatch(new DeleteCourse({ id })));
  }

  goToEditPage(id: string): void {
    this.router.navigate(['courses', id]);
  }

  loadMore(): void {
    this.store.dispatch(new FetchMore());
  }

  private getCourses = () => {
    this.store.dispatch(new FetchCourses());
    this.courses = this.store.pipe(
      select(courses.getCourses),
    );
  }
}
