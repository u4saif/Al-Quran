import { Component } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-parah',
  templateUrl: './parah.component.html',
  styleUrls: ['./parah.component.scss'],
})
export class ParahComponent {
  currentTheme = 'light';
  QuranText: string = '';
  translationText: string = '';
  translationAudio: string = '';
  currentSurah = 1;
  //cardData$: Observable<any>;
  cardData: any;
  juzList: { number: number, name: string }[] = [
    { number: 1, name: 'Alif Lam Meem' },
    { number: 2, name: 'Sayaqool' },
    { number: 3, name: 'Tilkal Rusull' },
    { number: 4, name: 'Lan Tana Loo' },
    { number: 5, name: 'Wal Mohsanat' },
    { number: 6, name: 'Ya Ayyuha Al-Ladhina Amanu' },
    { number: 7, name: 'Wa Iza Samiu' },
    { number: 8, name: 'Wa Lau Annana' },
    { number: 9, name: 'Qad Aflaha' },
    { number: 10, name: 'Wa A lamu' },
    { number: 11, name: 'Yatazeroon' },
    { number: 12, name: 'Wa Mamin Daabat' },
    { number: 13, name: 'Wa Ma Ubrioo' },
    { number: 14, name: 'Rubama' },
    { number: 15, name: 'Subhanallazi' },
    { number: 16, name: 'Qal Alam' },
    { number: 17, name: 'Aqtarabat' },
    { number: 18, name: 'Qadd Aflaha' },
    { number: 19, name: 'Wa Qalallazina' },
    { number: 20, name: 'Aman Khalaq' },
    { number: 21, name: 'Utlu Ma Oohi' },
    { number: 22, name: 'Wa Manyaqnut' },
    { number: 23, name: 'Wa Mali' },
    { number: 24, name: 'Faman Azlam' },
    { number: 25, name: 'Elahe Yuruddo' },
    { number: 26, name: 'Ha Meem' },
    { number: 27, name: 'Qala Fama Khatbukum' },
    { number: 28, name: 'Qadd Aflaha' },
    { number: 29, name: 'Tabarakallazi' },
    { number: 30, name: 'Amma Yatasa aloon' }
  ];
  cardDataInitial: any;
  sidebarVisible: boolean = false;
  settingVisible: boolean = false;
  constructor(private dashboardServive: DashboardService) {
    //this.cardData$ =  this.dashboardServive.get('https://api.alquran.cloud/v1/surah');
  }
  //https://api.alquran.cloud/v1/edition/language
  //https://api.alquran.cloud/v1/edition/format/text /audio
  //https://api.alquran.cloud/v1/edition/type/translation
  // https://api.alquran.cloud/v1/surah/1/editions/uran-wordbyword,hi.farooq

  surahData: any = null;

  ngOnInit(): void {
    this.dashboardServive.get('https://api.alquran.cloud/v1/surah').subscribe(
      (response: any) => {
        this.cardData = this.juzList ;
        this.cardDataInitial = this.juzList;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  toggleTheme(value: string) {
    this.currentTheme = value;
  }

  settingUpdate(eventData: any) {
    this.QuranText = eventData.QuranText;
    this.translationText = eventData.translationText;
    this.translationAudio = eventData.translationAudio;
    this.surahData = null;
    this.dashboardServive
      .get(
        `https://api.alquran.cloud/v1/surah/${this.currentSurah}/editions/${this.QuranText},${this.translationText},${this.translationAudio}`
      )
      .subscribe((response) => {
        this.surahData = response;
      });
    this.settingVisible = false;
  }

  surahChanged(eventData: number) {
    this.currentSurah = eventData;
    this.surahData = null;
    this.sidebarVisible = false;
    this.dashboardServive
      .get(
        `https://api.alquran.cloud/v1/juz/1/utmani.asad`
      )
      .subscribe((response) => {
        this.surahData = response;
      });
  }
  searchKeys: any = [
    'englishName',
    'englishNameTranslation',
    'name',
    'number',
    'numberOfAyahs',
    'revelationType',
  ];
  search(value: any) {
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

  changeParah(eventData: any) {
    this.currentSurah = eventData;
    this.surahData = null;
    this.dashboardServive
      .get(
        `https://api.alquran.cloud/v1/juz/${this.currentSurah}/utmani.asad`
      )
      .subscribe((response) => {
        this.surahData = response;
      });
  }
}

