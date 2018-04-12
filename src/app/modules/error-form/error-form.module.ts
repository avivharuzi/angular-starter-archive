import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorFormComponent } from './error-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ErrorFormComponent
  ],
  exports: [ErrorFormComponent]
})
export class ErrorFormModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ErrorFormModule
    };
  }
}
