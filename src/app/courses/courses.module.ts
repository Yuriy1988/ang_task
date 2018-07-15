import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { CoursesService } from './courses.service';


@NgModule({
  imports: [
    SharedModule,
    ModalModule,
  ],
  declarations: [
    CourseListComponent,
    CourseComponent,
    EmptyStateComponent,
  ],
  providers: [
    CoursesService
  ],
  exports: [
    CourseListComponent,
  ]
})
export class CoursesModule { }
