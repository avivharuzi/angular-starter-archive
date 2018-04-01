// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Custom Modules
import { MessageModule } from './modules/message/message.module';
import { PaginationModule } from './modules/pagination/pagination.module';
import { BackToTopModule } from './modules/back-to-top/back-to-top.module';
import { LoadingModule } from './modules/loading/loading.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/main/pages/home/home.component';
import { ErrorPageComponent } from './components/errors/error-page/error-page.component';
import { ErrorFormComponent } from './components/errors/error-form/error-form.component';

// Services
import { ValidationService } from './services/validation/validation.service';

// Pipes
import { SearchPipe } from './pipes/search/search.pipe';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { UcwordsPipe } from './pipes/ucwords/ucwords.pipe';
import { DefaultPipe } from './pipes/default/default.pipe';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';
import { SafeHtmlPipe } from './pipes/safe-html/safe-html.pipe';

// Directives
import { DefaultImageDirective } from './directives/default-image/default-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorFormComponent,
    ErrorPageComponent,
    DefaultImageDirective,
    CapitalizePipe,
    SearchPipe,
    UcwordsPipe,
    DefaultPipe,
    TruncatePipe,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    RouterModule,
    HttpClientModule,
    MessageModule.forRoot(),
    PaginationModule.forRoot(),
    BackToTopModule.forRoot(),
    LoadingModule.forRoot()
  ],
  providers: [
    ValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
