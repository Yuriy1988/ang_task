import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course/course.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CourseListComponent,
    CourseComponent,
  ],
  exports: [
    CourseListComponent,
  ]
})
export class CoursesModule { }
