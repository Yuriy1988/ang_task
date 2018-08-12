import { Component, OnDestroy, OnInit } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { AuthService } from './core/auth/auth.service';
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
  email: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.authService.getUserInfo()
      .subscribe(({ email }): void => {
        this.email = email;
      });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // tslint:disable-next-line
  ngOnDestroy() {
  }
}
