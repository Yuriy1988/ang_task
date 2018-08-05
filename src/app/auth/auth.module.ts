import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule,
  ],
  declarations: [ LoginComponent, RegisterComponent ],
  exports: [ LoginComponent, RegisterComponent ]
})
export class AuthModule { }
