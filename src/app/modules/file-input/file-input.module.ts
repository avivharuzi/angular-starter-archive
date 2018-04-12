import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileInputComponent } from './file-input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FileInputComponent
  ],
  exports: [FileInputComponent]
})
export class FileInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FileInputModule
    };
  }
}
