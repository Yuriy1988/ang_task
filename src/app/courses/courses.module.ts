import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { CoursesService } from './courses.service';
import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CustomValidatorDirective } from './course-form/custom-validator.directive';
import { MultiSelectComponent } from './course-form/multi-select.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    SharedModule,
    ModalModule,
    CoursesRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    CustomValidatorDirective,
    CoursesPageComponent,
    CourseListComponent,
    CourseComponent,
    EmptyStateComponent,
    CourseFormComponent,
    MultiSelectComponent,
  ],
  providers: [
    CoursesService
  ],
  exports: [
    CourseListComponent,
  ]
})
export class CoursesModule { }
