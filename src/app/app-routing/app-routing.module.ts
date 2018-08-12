import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { PageNotFoundComponent } from '../shared/ui-components/pageNotFound/page-not-found.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: 'courses', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
