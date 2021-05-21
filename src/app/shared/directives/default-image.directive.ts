import { Directive, HostBinding, HostListener, Input } from '@angular/core';

import { environment } from '../../../environments/environment';

@Directive({
  selector: '[appDefaultImage]',
})
export class DefaultImageDirective {
  @Input() appDefaultImage: string;

  @HostBinding('src')
  @Input()
  src?: string;

  @HostListener('error')
  onError(): void {
    this.src = this.appDefaultImage;
  }

  constructor() {
    this.appDefaultImage = environment.defaultImagePath;
  }
}
