import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

const isInPast = (dateToCheck) => moment(dateToCheck).isBefore(Date.now());
const isInFuture = (dateToCheck) => moment(dateToCheck).isAfter(Date.now());
const isWithinTwoWeeks = (dateToCheck) => moment(dateToCheck).isAfter(moment(Date.now()).subtract('14', 'day'));

@Directive({
  selector: '[appDateWarning]'
})
export class DateWarningDirective implements OnInit {
  @Input() appDateWarning: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.checkDateStatus(this.appDateWarning);
  }

  private checkDateStatus(dateToCheck): void {
      if (isInPast(dateToCheck) && isWithinTwoWeeks(dateToCheck)) {
        this.highlightBorder('green');
      }

      if (isInFuture(dateToCheck)) {
        this.highlightBorder('blue');
      }
  }

  private highlightBorder(color): void {
    this.el.nativeElement.style.border = `1px solid ${color}`;
  }
}
