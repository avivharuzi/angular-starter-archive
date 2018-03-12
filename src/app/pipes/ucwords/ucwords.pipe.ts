import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucwords'
})
export class UcwordsPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      let newValue = '';
      let words = value.split(' ');
      let space = ' ';
      for (let i = 0; i < words.length; i++) {
        if (i === words.length - 1) {
          space = '';
        }
        words[i] = words[i].toLowerCase();
        newValue += words[i].charAt(0).toUpperCase() + words[i].slice(1) + space;
      }
      return newValue;
    } else {
      return value;
    }
  }
}
