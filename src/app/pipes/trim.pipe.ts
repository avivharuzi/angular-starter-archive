import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {
  transform(value: string, chars: string = '\\s'): string {
    return typeof value === 'string' ? value.replace(new RegExp(
      `^[${chars}]+|[${chars}]+$`, 'g'
    ), '') : value;
  }
}
