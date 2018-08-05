import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  sub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.authService.getIsAuthenticated()
      .subscribe((isAuthenticated) => {
        isAuthenticated
          ? this.router.navigate(['courses'])
          : this.createRegisterLogin();
      });
  }

  onSubmit(): void {
    this.sub = this.authService.register(this.registerForm.value)
      .subscribe(() => {
        this.router.navigate(['login']);
      });
  }

  private createRegisterLogin(): void {
    this.registerForm = new FormGroup ({
      email: new FormControl(),
      password: new FormControl()
    });
  }
}
