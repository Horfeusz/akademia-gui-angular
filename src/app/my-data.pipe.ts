import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dataEmisji'
})
export class MyDataPipe implements PipeTransform {

  transform(value: any, formatString?: any): any {
    const result = moment(value).parseZone();
    if (formatString) {
      return result.format(formatString);
    }
    return result.format('YYYY-MM-DD HH:mm:ss');
  }

}
