import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router
} from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import * as auth from '../../auth/auth.reducer';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<auth.AuthState>,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true);
    // return this.store.pipe(
    //   select(auth.isAuthenticated),
    //   tap((isAuth) => !isAuth && this.router.navigate(['/login'])),
    // );
  }
}
