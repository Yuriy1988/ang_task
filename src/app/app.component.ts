import { Component, OnInit } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { AuthService } from './core/auth/auth.service';
import { User } from './core/auth/user-interface';
import { Subscription } from 'rxjs/Subscription';

@AutoUnsubscribe()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sub: Subscription;
  isAuthenticated: boolean;
  email: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.sub = this.authService.getUserInfo().subscribe(({ isAuthenticated, email }: User): void => {
      this.isAuthenticated = isAuthenticated;
      this.email = email;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
