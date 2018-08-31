import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  styleUrls: ['./multi-select.component.scss'],
  templateUrl: './multi-select.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class MultiSelectComponent implements OnInit {
  @Input() itemsName = 'Authors';
  @Input() items: object[];
  @Input() selectedItems: object[];
  @Input() control: AbstractControl;

  ngOnInit() {
  }
}

