import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent {
  @Output() find = new EventEmitter<string>();
  @Output() add = new EventEmitter<string>();
  searchValue: string;

  onFindClick(value: string): void {
    this.find.emit(value);
  }

  onAddClick(): void {
    this.add.emit();
  }
}
