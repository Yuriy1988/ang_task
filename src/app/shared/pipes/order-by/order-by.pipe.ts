import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Course } from '../../interfaces/course.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(list: Course[], orderBy: string): Course[] {
    switch (orderBy) {
      case 'creationDate':
        return this.orderByCreationDate(list);
      case 'topRated':
        return this.orderByRate(list);
      default:
      return this.orderListBy(list, orderBy);
    }
  }

  private orderByCreationDate(list): Course[] {
    return list.sort((a, b) => {
      return moment(a.creationDate).isSameOrAfter(b.creationDate)
        ? 1
        : -1;
    });
  }

  private orderByRate(list): Course[] {
    return list.sort(a => {
      return a.topRated
        ? 1
        : -1;
    });
  }

  private orderListBy(list, orderBy): Course[] {
    return list.sort((a, b) => {
      return a[orderBy] >= b[orderBy]
        ? 1
        : -1;
    });
  }
}
