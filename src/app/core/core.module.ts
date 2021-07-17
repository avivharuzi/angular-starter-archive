import { NgModule } from '@angular/core';

import { CoreComponent } from './core.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CoreComponent, HomeComponent, NotFoundComponent],
  imports: [SharedModule],
})
export class CoreModule {}
