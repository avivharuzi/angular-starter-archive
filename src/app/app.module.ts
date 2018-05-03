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
import { FileInputModule } from './modules/file-input/file-input.module';
import { PictureModule } from './modules/picture/picture.module';
import { CountDownTimerModule } from './modules/countdown-timer/countdown-timer.module';
import { ErrorFormModule } from './modules/error-form/error-form.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

// Services
import { ValidationService } from './services/validation/validation.service';
import { HttpService } from './services/http/http.service';

// Pipes
import { SearchPipe } from './pipes/search/search.pipe';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { UcwordsPipe } from './pipes/ucwords/ucwords.pipe';
import { DefaultPipe } from './pipes/default/default.pipe';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';
import { SafeHtmlPipe } from './pipes/safe-html/safe-html.pipe';

// Directives
import { DefaultImageDirective } from './directives/default-image/default-image.directive';
import { ClipboardDirective } from './directives/clipboard/clipboard.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorPageComponent,
    DefaultImageDirective,
    ClipboardDirective,
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
    LoadingModule.forRoot(),
    FileInputModule.forRoot(),
    ErrorFormModule.forRoot(),
    PictureModule.forRoot(),
    CountDownTimerModule.forRoot()
  ],
  providers: [
    ValidationService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
