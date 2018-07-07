import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    CourseListComponent,
    CourseComponent,
    EmptyStateComponent,
  ],
  exports: [
    CourseListComponent,
  ]
})
export class CoursesModule { }
