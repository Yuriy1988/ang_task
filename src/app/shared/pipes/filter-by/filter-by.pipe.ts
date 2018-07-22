import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../interfaces/course.model';

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
    return list.filter(c => c[filterBy].toLowerCase()
      .includes(filterValue.toLowerCase()));
  }
}
