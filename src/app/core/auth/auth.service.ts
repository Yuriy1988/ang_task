import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl = 'users';

  login({ email, password }: User): Observable<User> {
    return this.httpClient.get<User>(`${this.baseUrl}?email=${email}&password=${password}`);
  }

  register({ email, password }: User): Observable<User> {
    return this.httpClient.post<User>(
      this.baseUrl,
      {
        email,
        password,
        fakeToken: String(Date.now())
      },
    );
  }

  logout(): void {
    localStorage.setItem('email', '');
    localStorage.setItem('fakeToken', '');
  }
}

