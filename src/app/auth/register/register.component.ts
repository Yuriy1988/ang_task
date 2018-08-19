import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { Register } from '../auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../store-configuration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.createRegisterLogin();
  }

  onSubmit(): void {
    this.store.dispatch(new Register(this.registerForm.value));
  }

  private createRegisterLogin(): void {
    this.registerForm = new FormGroup ({
      email: new FormControl(),
      password: new FormControl()
    });
  }
}
