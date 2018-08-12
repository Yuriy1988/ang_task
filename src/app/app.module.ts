import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HTTPInterceptor } from './core/auth/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    CoreModule,
    CoursesModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HTTPInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
