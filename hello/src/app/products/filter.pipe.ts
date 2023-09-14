import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value;
  }

}
