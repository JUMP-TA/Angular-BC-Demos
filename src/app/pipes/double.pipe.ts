import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double',
  standalone: true
})
export class DoublePipe implements PipeTransform {

  // pipe will take a string and "double" it
  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value !== 'string') {
      return value;
    }

    return value + " " + value;
  }

}
