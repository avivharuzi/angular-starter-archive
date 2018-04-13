import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PictureComponent } from './picture.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PictureComponent
  ],
  exports: [PictureComponent]
})
export class PictureModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PictureModule
    };
  }
}
