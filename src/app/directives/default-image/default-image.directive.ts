import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDefaultImage]'
})
export class DefaultImageDirective implements OnInit {
  @Input('appDefaultImage')
  public appDefaultImage: string;

  constructor (public el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.src = this.appDefaultImage;
    this.el.nativeElement.onerror = () => {
      this.el.nativeElement.src = 'assets/images/defaults/default-image.png';
    };
  }
}
