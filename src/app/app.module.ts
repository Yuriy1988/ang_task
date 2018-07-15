import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoursesModule } from './courses/courses.module';
import './shared/rxjs-imports';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    CoreModule,
    CoursesModule,
    LoginModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
