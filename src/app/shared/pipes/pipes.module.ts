import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration/duration.pipe';
import { OrderByPipe } from './order-by/order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ DurationPipe, OrderByPipe ],
  exports: [ DurationPipe ],
})
export class PipesModule { }
