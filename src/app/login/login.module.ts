import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    LoginRoutingModule,
  ],
  declarations: [ LoginComponent ],
  exports: [ LoginComponent ]
})
export class LoginModule { }
