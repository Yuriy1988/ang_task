import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import * as moment from 'moment';
import { AuthService } from '../../core/auth/auth.service';
import { CoursesService } from '../courses.service';
import { Course } from '../../shared/interfaces/course.model';

@AutoUnsubscribe()
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit, OnDestroy {
  courseForm: FormGroup;
  courseSub: Subscription;
  courseChangeSub: Subscription;
  currentCourse: Course;
  courseId: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.params.id;

    if (this.courseId) {
      this.courseSub = this.coursesService.getCourseById(this.courseId)
        .subscribe((course: Course): void => {
          this.currentCourse = course;
          this.createEditForm(course);
        });
    } else {
      this.createAddForm();
    }
  }

  // tslint:disable-next-line
  ngOnDestroy() {
  }

  onSubmit(): void {
    const course = this.courseForm.value;

    if (this.courseId) {
      this.courseChangeSub = this.coursesService
        .updateCourse(this.courseId, course)
        .subscribe(() =>  this.goBack());
    } else {
      this.courseChangeSub = this.coursesService
        .addCourse(course)
        .subscribe(() =>  this.goBack());
    }
  }

  onCancel(): void {
    this.router.navigate(['../']);
  }

  private createAddForm(): void {
    this.courseForm = new FormGroup ({
      name: new FormControl(),
      description: new FormControl(),
      date: new FormControl(),
      length: new FormControl(),
    });
  }

  private createEditForm(course: Course): void {
    this.courseForm = new FormGroup ({
      name: new FormControl(course.name),
      description: new FormControl(course.description),
      date: new FormControl(moment(course.date).toDate()),
      length: new FormControl(course.length),
    });
  }

  private goBack(): void {
    this.router.navigate(['../']);
  }
}

