import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'match'
})
export class MatchPipe implements PipeTransform {
  transform(value: string, pattern: string, flags?: string): RegExpMatchArray | null;
  transform<T>(value: T, pattern: string, flags?: string): T;
  transform(value: any, pattern: string, flags?: string): any {
    if (typeof value !== 'string') {
      return value;
    }
    return value.match(new RegExp(pattern, flags));
  }
}
