import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Observable } from 'rxjs/internal/Observable';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import * as moment from 'moment';
import { AuthService } from '../../core/auth/auth.service';
import { CoursesService } from '../courses.service';
import { Course } from '../../shared/interfaces/course.model';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store-configuration';
import { AddCourse, EditCourse } from '../courses.actions';
import { Author } from '../../shared/interfaces/author.model';
import * as courses from '../courses.reducer';

const MAX_TITLE_LENGTH = 50;
const MAX_DESCRIPTION_LENGTH = 500;

@AutoUnsubscribe()
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup;
  courseSub: Subscription;
  selectedAuthors: Author[];
  currentCourse: Course;
  authors: Observable<Author[]>;
  courseId: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.params.id;
    this.authors = this.store.pipe(select(courses.getAuthors));

    if (this.courseId) {
      this.courseSub = this.coursesService.getCourseById(this.courseId)
        .subscribe((course: Course): void => {
          this.currentCourse = course;
          this.selectedAuthors = course.authors;
          this.createEditForm(course);
        });
    } else {
      this.createAddForm();
    }
  }

  onSubmit(): void {
    const course = this.courseForm.value;

    if (this.courseId) {
      this.store.dispatch(new EditCourse({ id: Number(this.courseId), course }));
      this.goBack();
    } else {
      this.store.dispatch(new AddCourse({ course }));
      this.goBack();
    }
  }

  onCancel(): void {
    this.goBack();
  }

  private createAddForm(): void {
    this.courseForm = new FormGroup ({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(MAX_TITLE_LENGTH),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(MAX_DESCRIPTION_LENGTH)
      ]),
      date: new FormControl('', [Validators.required]),
      length: new FormControl('', Validators.required),
      authors: new FormControl('', Validators.required),
    });
  }

  private createEditForm(course: Course): void {
    this.courseForm = new FormGroup ({
        name: new FormControl(course.name, [
          Validators.required,
          Validators.maxLength(MAX_TITLE_LENGTH)]
        ),
        description: new FormControl(course.description, [
          Validators.required,
          Validators.maxLength(MAX_DESCRIPTION_LENGTH)
        ]),
        date: new FormControl(moment(course.date).toDate(), [
          Validators.required
        ]),
        length: new FormControl(course.length, Validators.required),
        authors: new FormControl(course.authors, Validators.required),
      }
    );
  }

  private goBack(): void {
    this.router.navigate(['../']);
  }
}
