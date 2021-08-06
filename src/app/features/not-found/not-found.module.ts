import { NgModule } from '@angular/core';

import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [NotFoundRoutingModule, SharedModule],
})
export class NotFoundModule {}
