import { NgModule } from '@angular/core';
import { DurationPipe } from './duration/duration.pipe';
import { OrderByPipe } from './order-by/order-by.pipe';
import { FilterByPipe } from './filter-by/filter-by.pipe';

@NgModule({
  declarations: [ DurationPipe, OrderByPipe, FilterByPipe ],
  exports: [ DurationPipe, OrderByPipe, FilterByPipe ],
})
export class PipesModule { }
