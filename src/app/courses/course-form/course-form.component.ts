import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { Course } from '../../shared/interfaces/course.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup;
  sub: Subscription;
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
      this.coursesService.setActiveCourse(this.courseId);
      this.sub = this.coursesService.getCourseById(this.courseId)
        .subscribe((course: Course): void => {
          this.currentCourse = course;
          this.createEditForm(course);
        });
    } else {
      this.createAddForm();
    }
  }

  onSubmit(): void {
    const course = this.courseForm.value;
    if (this.courseId) {
      this.coursesService.updateCourse(this.courseId, course);
    } else {
      this.coursesService.addCourse(course);
    }
    this.router.navigate(['../']);
  }

  onCancel(): void {
    this.router.navigate(['../']);
  }

  private createAddForm(): void {
    this.courseForm = new FormGroup ({
      title: new FormControl(),
      description: new FormControl(),
      creationDate: new FormControl(),
      duration: new FormControl(),
    });
  }

  private createEditForm(course: Course): void {
    this.courseForm = new FormGroup ({
      title: new FormControl(course.title),
      description: new FormControl(course.description),
      creationDate: new FormControl(course.creationDate),
      duration: new FormControl(course.duration),
    });
  }
}

