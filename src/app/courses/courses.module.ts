import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ToolboxComponent } from './toolbox/toolbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CourseListComponent,
    CourseComponent,
    BreadcrumbsComponent,
    ToolboxComponent,
  ],
  exports: [
    CourseListComponent,
    CourseComponent,
    BreadcrumbsComponent,
    ToolboxComponent,
  ]
})
export class CoursesModule { }
