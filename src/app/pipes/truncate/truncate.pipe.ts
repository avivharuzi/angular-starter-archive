import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number, completeWords: boolean = false, ellipsis: string = '...') {
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }
    if (value.length <= limit) {
      ellipsis = '';
    }
    return `${value.substr(0, limit)}${ellipsis}`;
  }
}
