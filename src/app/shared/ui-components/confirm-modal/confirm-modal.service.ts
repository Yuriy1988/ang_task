import { ConfirmModalComponent } from './confirm-modal.component';
import { Injectable } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ConfirmModalService {
  modalRef: BsModalRef;
  status = new Subject<boolean>();

  constructor(private bsModalService: BsModalService) {}

  open() {
    this.modalRef = this.bsModalService.show(ConfirmModalComponent, {class: 'modal-sm'});
    return this.status.asObservable();
  }

  confirm() {
    this.modalRef.hide();
    this.status.next(true);
  }

  decline() {
    this.modalRef.hide();
    this.status.next(false);
  }
}
