import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpStatusService {
  private isRequesting = new BehaviorSubject(false);

  setRequestingStatus(status: boolean) {
    this.isRequesting.next(status);
  }

  getRequestingStatus(): Observable<boolean> {
    return this.isRequesting.asObservable();
  }
}
