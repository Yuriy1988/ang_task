import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import * as auth from '../auth.reducer';
import { Login } from '../auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<auth.State>
  ) {}

  ngOnInit() {
    this.authService.getIsAuthenticated()
      .subscribe((isAuthenticated) => {
        isAuthenticated
          ? this.router.navigate(['courses'])
          : this.createLoginForm();
      });
  }

  onSubmit(): void {
    this.store.dispatch(new Login(this.loginForm.value));
  }

  private createLoginForm(): void {
    this.loginForm = new FormGroup ({
      email: new FormControl(),
      password: new FormControl()
    });
  }
}
