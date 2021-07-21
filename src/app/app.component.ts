import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgxSeoService } from '@avivharuzi/ngx-seo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private ngxSeoService: NgxSeoService) {}

  ngOnInit(): void {
    this.ngxSeoService.subscribe();
  }
}
