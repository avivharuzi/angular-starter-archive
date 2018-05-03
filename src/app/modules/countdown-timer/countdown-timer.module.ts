import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountDownTimerComponent } from './countdown-timer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CountDownTimerComponent
  ],
  exports: [CountDownTimerComponent]
})
export class CountDownTimerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CountDownTimerModule
    };
  }
}
