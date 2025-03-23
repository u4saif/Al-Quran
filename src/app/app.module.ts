import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { LoadingSkeletonComponent } from './components/loading-skeleton/loading-skeleton.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SharedPrimeNgModulesModule } from './shared-prime-ng-modules/shared-prime-ng-modules.module';
import { HomeComponent } from './home/home.component';
import { ParahComponent } from './parah/parah.component';
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
    EnglishToArabicPipe,
    LoadingSkeletonComponent,
    SearchBoxComponent,
    HomeComponent,
    ParahComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    SharedPrimeNgModulesModule,
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
