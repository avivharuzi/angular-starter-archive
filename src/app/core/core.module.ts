import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NotFoundComponent, HomeComponent],
  imports: [SharedModule],
})
export class CoreModule {}
