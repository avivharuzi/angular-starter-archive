import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugify'
})
export class SlugifyPipe implements PipeTransform {
  transform(value: string): string {
    return typeof value === 'string'
      ? value.toLowerCase().trim()
        .replace(/[^\w\-]+/g, ' ')
        .replace(/\s+/g, '-')
      : value;
  }
}
