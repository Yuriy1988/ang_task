import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { CoursesService } from './courses.service';
import { AddCourseComponent } from './add-course/add-course.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    SharedModule,
    ModalModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    CourseListComponent,
    CourseComponent,
    EmptyStateComponent,
    AddCourseComponent,
  ],
  providers: [
    CoursesService
  ],
  exports: [
    CourseListComponent,
  ]
})
export class CoursesModule { }
