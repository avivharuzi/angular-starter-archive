import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { NgxSeoModule } from '@avivharuzi/ngx-seo';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { appEffects } from './store/app.effects';
import { appReducer } from './store/app.reducer';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CoreModule,
    NgxSeoModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(appEffects),
    NgxSeoModule.forRoot({ preserve: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
