import { Component, EventEmitter, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentTheme = 'light';
  QuranText:string = '';
  translationText:string ='';
  translationAudio:string ='';
  currentSurah = 1;
  cardData$: Observable<any>;
  constructor(private dashboardServive:DashboardService) {
    this.cardData$ =  this.dashboardServive.get('https://api.alquran.cloud/v1/surah');
  }
  //https://api.alquran.cloud/v1/edition/language
  //https://api.alquran.cloud/v1/edition/format/text /audio
  //https://api.alquran.cloud/v1/edition/type/translation
  // https://api.alquran.cloud/v1/surah/1/editions/uran-wordbyword,hi.farooq

  surahData: any = null;

  ngOnInit(): void {}
  toggleTheme(value: string) {
    this.currentTheme = value;
  }

  settingUpdate(eventData:any){
    this.QuranText = eventData.QuranText;
    this.translationText = eventData.translationText;
    this.translationAudio = eventData.translationAudio;
    this.surahData = null;
    this.dashboardServive
      .get(`https://api.alquran.cloud/v1/surah/${this.currentSurah}/editions/${this.QuranText},${this.translationText},${this.translationAudio}`)
      .subscribe((response) => {
        this.surahData = response;
      });
  }

  surahChanged(eventData: number){
    this.currentSurah = eventData;
    this.surahData = null;
    this.dashboardServive
    .get(`https://api.alquran.cloud/v1/surah/${this.currentSurah}/editions/${this.QuranText},${this.translationText},${this.translationAudio}`)
    .subscribe((response) => {
      this.surahData = response;
    }); 
  }
}
