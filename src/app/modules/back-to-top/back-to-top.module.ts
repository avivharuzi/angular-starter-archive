import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackToTopComponent } from './back-to-top.component';
import { BackToTopDirective } from './back-to-top.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BackToTopComponent,
    BackToTopDirective
  ],
  exports: [BackToTopComponent]
})
export class BackToTopModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BackToTopModule
    };
  }
}
