import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() email;
  @Output() logout = new EventEmitter<void>();

  onLogout(): void {
   this.logout.emit();
  }
}
