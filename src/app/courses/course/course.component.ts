import { Component, Input } from '@angular/core';
import { Course } from '../../shared/interfaces/course.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  @Input () course: Course;
}
