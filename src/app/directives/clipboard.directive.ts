import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appClipboard]'
})
export class ClipboardDirective {
  @Input() public appClipboard: any;
  @Output() public copied: EventEmitter<string>;

  public value: string;

  constructor() {
    this.copied = new EventEmitter<string>();
  }

  @HostListener('click') onClick() {
    this.copyToClipboard();
  }

  copyToClipboard(): void {
    if (this.appClipboard) {
      let aux = document.createElement('input');
      aux.setAttribute('value', this.appClipboard);
      document.body.appendChild(aux);
      aux.select();
      document.execCommand('copy');
      document.body.removeChild(aux);
      this.copied.emit(this.appClipboard);
    }
  }
}
