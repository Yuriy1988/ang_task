import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';

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
  ) {}

  ngOnInit() {
    if (this.authService.getIsAuthenticated()) {
      this.router.navigate(['courses']);
    }

    this.createLoginForm();
  }

  onSubmit(): void {
    this.authService.login(this.loginForm.value.email);
    this.router.navigate(['courses']);
  }

  private createLoginForm(): void {
    this.loginForm = new FormGroup ({
      email: new FormControl(),
      password: new FormControl()
    });
  }
}
