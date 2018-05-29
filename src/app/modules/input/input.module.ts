import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorFormModule } from '../error-form/error-form.module';

import { InputComponent } from './input.component';

@NgModule({
  imports: [
    CommonModule,
    ErrorFormModule
  ],
  declarations: [
    InputComponent
  ],
  exports: [InputComponent]
})
export class InputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: InputModule
    };
  }
}
