import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {
  @Output() find = new EventEmitter<Observable<string>>();
  @Output() add = new EventEmitter<string>();
  search = new FormControl();

  ngOnInit () {
    this.find.emit(this.search.valueChanges);
  }

  onAddClick(): void {
    this.add.emit();
  }
}
