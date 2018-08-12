import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../core/auth/auth-guard.service';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';

const courseRoutes: Routes = [
  {
    path: 'courses',
    component: CoursesPageComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: '',
        component: CourseListComponent,
      },
      {
        path: 'add',
        component: CourseFormComponent
      },
      {
        path: ':id',
        component: CourseFormComponent
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(courseRoutes),
  ],
  exports: [
    RouterModule
  ],
})
export class CoursesRoutingModule { }
