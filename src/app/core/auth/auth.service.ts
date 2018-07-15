import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './user-interface';

export class AuthService {
  private userInfo = new BehaviorSubject<User>({
    email: localStorage.getItem('email'),
    isAuthenticated: Boolean(localStorage.getItem('email')),
  });

  login(email: string): void {
    localStorage.setItem('email', email);
    this.userInfo.next({ isAuthenticated: true, email });
  }

  logout(): void {
    localStorage.setItem('email', '');
    this.userInfo.next({ isAuthenticated: false, email: '' });
  }

  getIsAuthenticated(): Observable<User> {
    return this.userInfo.asObservable();
  }

  getUserInfo(): Observable<User> {
    return this.userInfo.asObservable();
  }
}

