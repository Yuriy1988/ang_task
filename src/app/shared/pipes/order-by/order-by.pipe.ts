import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

// tslint:disable-next-line
  transform(list: any[]) {
    return list.sort((a, b) => {
      return moment(a.creationDate).isSameOrBefore(b.creationDate)
        ? -1
        : 1;
    });
  }
}
