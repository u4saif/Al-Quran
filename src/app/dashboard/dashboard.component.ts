import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

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
  //cardData$: Observable<any>;
  cardData : any;
  cardDataInitial : any;
  sidebarVisible: boolean = false;
  constructor(private dashboardServive:DashboardService) {
    //this.cardData$ =  this.dashboardServive.get('https://api.alquran.cloud/v1/surah');
  }
  //https://api.alquran.cloud/v1/edition/language
  //https://api.alquran.cloud/v1/edition/format/text /audio
  //https://api.alquran.cloud/v1/edition/type/translation
  // https://api.alquran.cloud/v1/surah/1/editions/uran-wordbyword,hi.farooq

  surahData: any = null;

  ngOnInit(): void {
    this.dashboardServive.get('https://api.alquran.cloud/v1/surah').subscribe(
      (response:any)=>{
        this.cardData=response.data
        this.cardDataInitial=response.data
      },
      (error)=>{console.error(error);
      })
  }
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
    this.sidebarVisible = false;
    this.dashboardServive
    .get(`https://api.alquran.cloud/v1/surah/${this.currentSurah}/editions/${this.QuranText},${this.translationText},${this.translationAudio}`)
    .subscribe((response) => {
      this.surahData = response;
    }); 
  }
  searchKeys :any = ['englishName','englishNameTranslation','name','number','numberOfAyahs','revelationType'];
  search(value:any){
     let copy_cardData = this.cardDataInitial;
     this.cardData = copy_cardData.filter((item: any) => {
      return (
        item[this.searchKeys[0]]?.toString().toLowerCase().includes(value) ||
        item[this.searchKeys[1]]?.toString().toLowerCase().includes(value) ||
        item[this.searchKeys[2]]?.toString().toLowerCase().includes(value) ||
        item[this.searchKeys[3]]?.toString().toLowerCase().includes(value) ||
        item[this.searchKeys[4]]?.toString().toLowerCase().includes(value) ||
        item[this.searchKeys[5]]?.toString().toLowerCase().includes(value)
      );
    });
  }
}
