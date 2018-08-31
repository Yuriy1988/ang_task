import { Observable } from 'rxjs/internal/Observable';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  styleUrls: ['./multi-select.component.scss'],
  templateUrl: './multi-select.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class MultiSelectComponent implements OnInit {
  @Input() itemsName: string;
  @Input() items: object[];
  @Input() selectedItems: object[];
  form: FormGroup;

  ngOnInit() {
    const selectedItems = new FormControl(this.selectedItems);

    this.form = new FormGroup({
      selectedItems,
    });
  }
}

