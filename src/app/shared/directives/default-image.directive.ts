import { Directive, HostBinding, HostListener, Input } from '@angular/core';

import { environment } from '../../../environments/environment';

@Directive({
  selector: '[appDefaultImage]',
})
export class DefaultImageDirective {
  @Input() appDefaultImage: string;

  @HostBinding('src')
  @Input()
  src: string;

  @HostListener('error')
  onError() {
    this.src = this.appDefaultImage ? this.appDefaultImage : environment.defaultImagePath;
  }
}
