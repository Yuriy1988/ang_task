import { Component, Input } from '@angular/core';
import { Course } from '../../interfaces/course.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent  {
  @Input() currentCourse: Course;
}
