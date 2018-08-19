import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

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
}

