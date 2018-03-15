import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit {
  @Input()
  public type: string;

  @Input()
  public message: any;

  @Input()
  public class: any;

  constructor() { }

  ngOnInit() {
  }

  isArray(value: any): boolean {
    if (value instanceof Array) {
      return true;
    } else {
      return false;
    }
  }
}
