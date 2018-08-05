import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private userInfo = new BehaviorSubject<User>({
    email: localStorage.getItem('email'),
    fakeToken: localStorage.getItem('fakeToken'),
  });
  private baseUrl = 'users';

  login({ email, password }): Observable<boolean> {
    return this.httpClient.get(`${this.baseUrl}?email=${email}&password=${password}`)
      .pipe(
        map(([ user ]: [ User ]): boolean => {
          if (user) {
            this.setUserInfo(user);
            return true;
          }

          return false;
        })
      );
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
    this.userInfo.next({
      email: '',
      fakeToken: '',
    });
    localStorage.setItem('email', '');
    localStorage.setItem('fakeToken', '');
  }

  getUserInfo(): Observable<User> {
    return this.userInfo.asObservable();
  }

  getIsAuthenticated(): Observable<boolean> {
    return this.getUserInfo().pipe(
      map(user => !!user.fakeToken)
    );
  }

  private setUserInfo(user): void {
    this.userInfo.next({
      email: user.email,
      fakeToken: user.fakeToken,
    });

    localStorage.setItem('email', user.email);
    localStorage.setItem('fakeToken', user.fakeToken);
  }
}

