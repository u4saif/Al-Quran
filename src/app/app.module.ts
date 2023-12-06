import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SurahCardComponent } from './components/surah-card/surah-card.component';
import { SurahPageComponent } from './components/surah-page/surah-page.component';
import { SettingCardComponent } from './components/setting-card/setting-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AudioPlayerDirective } from './customDirectives/audio-player.directive';
import { EnglishToArabicPipe } from './customPipe/english-to-arabic.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopNavComponent,
    SideNavComponent,
    SurahCardComponent,
    SurahPageComponent,
    SettingCardComponent,
    AudioPlayerDirective,
    EnglishToArabicPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
