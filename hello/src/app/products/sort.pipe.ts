import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {

  transform(value: Product[]): Product[] {
    if(value) {
        return value.sort((a: Product, b: Product) => {
            if(a.name < b.name) {
                return -1
            }
            else {
                return 1
            }
        })
    }
    return [];
  }

}
