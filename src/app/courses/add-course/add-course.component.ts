import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  courseForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private coursesService: CoursesService,
  ) {}

  ngOnInit() {
    this.createCourseForm();
  }

  onSubmit(): void {
    const course = this.courseForm.value;
    this.coursesService.addCourse(course);
    this.router.navigate(['../']);
  }

  onCancel(): void {
    this.router.navigate(['../']);
  }

  private createCourseForm(): void {
    this.courseForm = new FormGroup ({
      title: new FormControl(),
      description: new FormControl(),
      creationDate: new FormControl(),
      duration: new FormControl(),
    });
  }
}

