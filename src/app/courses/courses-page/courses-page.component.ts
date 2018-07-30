import { Component, OnChanges, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course } from '../../shared/interfaces/course.model';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnChanges {
  currentCourse: Course;

  constructor(
    private coursesService: CoursesService,
  ) {}

  ngOnChanges() {
    this.currentCourse = this.coursesService.currentCourse;
    console.log('111111111111111111', this.currentCourse)
  }
}
