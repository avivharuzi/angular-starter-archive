import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { DEFAULT_IMAGE_PATH } from './../../constants/urls';

@Directive({
  selector: '[appDefaultImage]'
})
export class DefaultImageDirective implements OnInit {
  @Input('appDefaultImage') public appDefaultImage: string;

  constructor (public el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.src = this.appDefaultImage;
    this.el.nativeElement.onerror = () => {
      this.el.nativeElement.src = DEFAULT_IMAGE_PATH;
    };
  }
}
