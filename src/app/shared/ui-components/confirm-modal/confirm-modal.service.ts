import { Injectable } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, Subject } from 'rxjs';
import { ConfirmModalComponent } from './confirm-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmModalService {
  modalRef: BsModalRef;
  status = new Subject<boolean>();

  constructor(private bsModalService: BsModalService) {}

  open(): Observable<boolean> {
    this.modalRef = this.bsModalService.show(ConfirmModalComponent, {class: 'modal-sm'});
    return this.status.asObservable();
  }

  confirm(): void {
    this.modalRef.hide();
    this.status.next(true);
  }

  decline(): void {
    this.modalRef.hide();
  }
}
