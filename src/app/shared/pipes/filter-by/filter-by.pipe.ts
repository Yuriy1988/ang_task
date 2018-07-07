import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { _localeFactory } from '@angular/core/src/application_module';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
  transform(list: Course[], filterBy: string, filterValue: string): Course[] {
    return filterValue
    ? this.orderListBy(list, filterBy, filterValue)
    : list;
  }

  private orderListBy(list, filterBy, filterValue): Course[] {
    console.log();

    return list.filter(c => c[filterBy].includes(filterValue));
  }
}
