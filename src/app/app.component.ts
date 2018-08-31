import { Component, OnInit } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import * as auth from './auth/auth.reducer';
import { AuthService } from './core/auth/auth.service';
import { Logout } from './auth/auth.actions';
import { FetchAuthors } from './courses/courses.actions';

@AutoUnsubscribe()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  email: Observable<string>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<auth.AuthState>
  ) {}

  ngOnInit() {
    this.email = this.store.pipe(select(auth.getUserEmail));
    this.store.dispatch(new FetchAuthors());
  }

  logout(): void {
    this.store.dispatch(new Logout());
    this.router.navigate(['/login']);
  }
}
