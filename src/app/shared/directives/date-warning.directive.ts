import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import * as moment from 'moment';

const isInPast = (dateToCheck) => moment(dateToCheck).isBefore(Date.now());
const isInFuture = (dateToCheck) => moment(dateToCheck).isAfter(Date.now());
const isWithinTwoWeeks = (dateToCheck) => moment(dateToCheck).isAfter(moment(Date.now()).subtract('14', 'day'));

@Directive({
  selector: '[appDateWarning]'
})
export class DateWarningDirective implements OnInit {
  @Input() appDateWarning: string;

  constructor(private renderer: Renderer2, private el: ElementRef) {
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
    this.renderer.setStyle(this.el.nativeElement, 'outline', `1px solid ${color}`);
  }
}
