import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit, OnChanges {
  @Input() public type: string;
  @Input() public message: any;
  @Input() public class: any;
  @Input() public dismissible: boolean;
  @Input() public isOpen: boolean;
  @Output() public closedMessage: EventEmitter<any> = new EventEmitter<any>();
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
    this.closedMessage.emit();
  }
}
