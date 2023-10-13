import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'cm'
})
export class CentimeterPipe implements PipeTransform {
  transform(value: number | string, decimals = 2) {
    value = typeof value === 'string' ? parseFloat(value) : value;
    if (value && !isNaN(value)) {
      const cm = value * 2.54;
      return cm.toFixed(decimals);
    }
    return null;
  }
}
