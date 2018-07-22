import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user.model';

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

  getIsAuthenticated(): boolean {
    return Boolean(localStorage.getItem('email'));
  }

  getUserInfo(): Observable<User> {
    return this.userInfo.asObservable();
  }
}

