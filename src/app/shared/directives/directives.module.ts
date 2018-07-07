import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateWarningDirective } from './date-warning.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ DateWarningDirective ],
  exports: [
    DateWarningDirective
  ]
})
export class DirectivesModule { }
