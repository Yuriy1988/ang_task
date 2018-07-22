import { Component, OnDestroy, OnInit } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { AuthService } from './core/auth/auth.service';
import { User } from './core/auth/user.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@AutoUnsubscribe()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  sub: Subscription;
  isAuthenticated: boolean;
  email: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.authService.getUserInfo().subscribe(({ isAuthenticated, email }: User): void => {
      this.isAuthenticated = isAuthenticated;
      this.email = email;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }

  // tslint:disable-next-line
  ngOnDestroy() {
  }
}
