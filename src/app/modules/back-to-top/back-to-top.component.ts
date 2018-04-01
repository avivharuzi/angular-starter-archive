import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent implements OnInit {
  @Input() public color: string;
  @Input() public background: string;
  @Input() public shape: string;
  @Input() public speed: number;

  constructor() { }

  ngOnInit() {
  }
}
