import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {
  @Input() public src: string;
  @Input() public width: number;
  @Input() public height: number;
  @Input() public class: string;

  constructor() { }
}
