import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration/duration.pipe';
import { OrderByPipe } from './order-by/order-by.pipe';
import { FilterByPipe } from './filter-by/filter-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ DurationPipe, OrderByPipe, FilterByPipe ],
  exports: [ DurationPipe, OrderByPipe, FilterByPipe ],
})
export class PipesModule { }
