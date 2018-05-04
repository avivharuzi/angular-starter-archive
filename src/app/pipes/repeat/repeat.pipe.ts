import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeat'
})
export class RepeatPipe implements PipeTransform {
  transform(value: string, n: number = 1, separator: string = ''): string {
    if (n <= 0) {
      throw new RangeError();
    }

    return n === 1 ? value : this.repeat(value, n - 1, separator);
  }

  repeat(value: string, n: number, separator: string): string {
    return typeof value === 'string'
      ? (n === 0 ? value : (value + separator + this.repeat(value, n - 1, separator)))
      : value;
  }
}
