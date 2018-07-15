import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.createForm();
  }

  onSubmit(): void {
    this.authService.login(this.loginForm.value.email);
  }

  private createForm(): void {
    this.loginForm = new FormGroup ({
      email: new FormControl(),
      password: new FormControl()
    });
  }
}
