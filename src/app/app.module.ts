// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Custom Modules
import { MessageModule } from './modules/message/message.module';
import { PaginationModule } from './modules/pagination/pagination.module';
import { BackToTopModule } from './modules/back-to-top/back-to-top.module';
import { LoadingModule } from './modules/loading/loading.module';
import { InputModule } from './modules/input/input.module';
import { FileInputModule } from './modules/file-input/file-input.module';
import { PictureModule } from './modules/picture/picture.module';
import { CountDownTimerModule } from './modules/countdown-timer/countdown-timer.module';
import { ErrorFormModule } from './modules/error-form/error-form.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

// Pipes
import { SearchPipe } from './pipes/search.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { UcwordsPipe } from './pipes/ucwords.pipe';
import { DefaultPipe } from './pipes/default.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { RepeatPipe } from './pipes/repeat.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { MatchPipe } from './pipes/match.pipe';
import { SlugifyPipe } from './pipes/slugify.pipe';
import { AutoLinkPipe } from './pipes/auto-link.pipe';

// Directives
import { DefaultImageDirective } from './directives/default-image.directive';
import { ClipboardDirective } from './directives/clipboard.directive';

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
    SafeUrlPipe,
    SafeHtmlPipe,
    RepeatPipe,
    TrimPipe,
    MatchPipe,
    SlugifyPipe,
    AutoLinkPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MessageModule.forRoot(),
    PaginationModule.forRoot(),
    BackToTopModule.forRoot(),
    LoadingModule.forRoot(),
    InputModule.forRoot(),
    FileInputModule.forRoot(),
    ErrorFormModule.forRoot(),
    PictureModule.forRoot(),
    CountDownTimerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
