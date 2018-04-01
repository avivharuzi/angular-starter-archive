import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit, OnChanges {
  @Input() public type: string;
  @Input() public message: any;
  @Input() public class: any;
  @Input() public dismissible: boolean;

  public isOpen: boolean;
  public icon: string;

  constructor() {
    this.dismissible = true;
    this.isOpen = true;
  }

  ngOnInit() {
    this.getIcon();
  }

  ngOnChanges() {
    this.getIcon();
    this.isOpen = true;
  }

  isArray(value: any): boolean {
    if (value instanceof Array) {
      return true;
    } else {
      return false;
    }
  }

  getIcon(): void {
    if (this.type) {
      switch (this.type) {
        case 'warning':
          this.icon = 'fa-exclamation-circle';
          break;
        case 'danger':
          this.icon = 'fa-exclamation-triangle';
          break;
        case 'success':
          this.icon = 'fa-check-circle';
          break;
        case 'info':
          this.icon = 'fa-info-circle';
          break;
        default:
          this.icon = '';
      }
    }
  }

  close(): void {
    this.isOpen = false;
  }
}
