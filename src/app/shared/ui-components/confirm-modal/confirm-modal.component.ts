import { ConfirmModalService } from './confirm-modal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html'
})
export class ConfirmModalComponent {
  constructor(private modalService: ConfirmModalService) {}

  confirm(): void {
    this.modalService.confirm();
  }

  decline(): void {
    this.modalService.decline();
  }
}
