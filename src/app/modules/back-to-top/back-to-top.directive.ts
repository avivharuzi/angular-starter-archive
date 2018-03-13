import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackToTop]'
})
export class BackToTopDirective implements OnInit {
  public displayClass: string;
  public activeClass: string;
  public inActiveClass: string;
  public scrollDistance: number;
  public acceleration: number;
  public animate: boolean;
  public timerId: any;

  @Input() shape: string;
  @Input() speed: number;

  constructor(public el: ElementRef) {
    this.scrollDistance = 50;
    this.displayClass = '';
    this.speed = 80;
    this.acceleration = 0;
    this.animate = true;
    this.timerId = null;
  }

  ngOnInit() {
    if (this.shape) {
      this.activeClass = 'activeTop' + ' ' + this.shape;
      this.inActiveClass = this.shape;
    } else {
      this.activeClass = 'activeTop';
      this.inActiveClass = '';
    }
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    if (this.isBrowser()) {
      this.displayClass = this.getCurrentScrollTop() > this.scrollDistance ? this.activeClass : this.inActiveClass;
      this.changeButtonBackToTop();
    }
  }

  @HostListener('click', ['$event']) onClick(e: any) {
    this.scrollTop(e);
  }

  isBrowser(): boolean {
    return typeof (window) !== 'undefined';
  }

  getCurrentScrollTop(): number {
    if (typeof window.scrollY !== 'undefined' && window.scrollY >= 0) {
      return window.scrollY;
    }

    if (typeof window.pageYOffset !== 'undefined' && window.pageYOffset >= 0) {
      return window.pageYOffset;
    }

    if (typeof document.body.scrollTop !== 'undefined' && document.body.scrollTop >= 0) {
      return document.body.scrollTop;
    }

    if (typeof document.documentElement.scrollTop !== 'undefined' && document.documentElement.scrollTop >= 0) {
      return document.documentElement.scrollTop;
    }
    return 0;
  }

  changeButtonBackToTop(): void {
    this.el.nativeElement.children[0].className = this.displayClass;
  }

  scrollTop(event: any) {
    if (!this.isBrowser()) {
      return;
    }

    event.preventDefault();
    if (this.animate) {
      this.animateScrollTop();
    } else {
      window.scrollTo(0, 0);
    }
  }

  animateScrollTop() {
    if (this.timerId !== null) {
      return;
    }

    let initialSpeed = this.speed;
    let that = this;

    this.timerId = setInterval(function () {
      window.scrollBy(0, -initialSpeed);
      initialSpeed = initialSpeed + that.acceleration;
      if (that.getCurrentScrollTop() === 0) {
        clearInterval(that.timerId);
        that.timerId = null;
      }
    }, 15);
  }
}
