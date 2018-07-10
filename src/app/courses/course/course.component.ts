import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../shared/interfaces/course.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  @Input () course: Course;
  @Output() deleteCourse = new EventEmitter<string>();

  onDeleteCourse(id: string ): void {
    this.deleteCourse.emit(id);
  }
}
