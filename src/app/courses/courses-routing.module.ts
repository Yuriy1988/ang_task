import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AuthGuard } from '../core/auth/auth-guard.service';

const heroesRoutes: Routes = [
  {
    path: 'courses',
    component: CourseListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses/add',
    component: AddCourseComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoursesRoutingModule { }
