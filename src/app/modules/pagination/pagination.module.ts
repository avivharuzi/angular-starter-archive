// Modules
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { PaginationComponent } from './pagination.component';

// Serivces
import { PaginationService } from './pagination.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PaginationComponent
  ],
  exports: [PaginationComponent]
})
export class PaginationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PaginationModule,
      providers: [PaginationService]
    };
  }
}

// --- To Fix The Error ---
// import { ChangeDetectorRef } from '@angular/core';
// constructor(private cdr: ChangeDetectorRef)
// this.cdr.detectChanges()
