import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentTheme = 'light';
  constructor() {}
  cardData = [
    {
      number: 1,
      name: 'سُورَةُ ٱلْفَاتِحَةِ',
      englishName: 'Al-Faatiha',
      englishNameTranslation: 'The Opening',
      numberOfAyahs: 7,
      revelationType: 'Meccan',
    },
    {
      number: 1,
      name: 'سُورَةُ ٱلْفَاتِحَةِ',
      englishName: 'Al-Faatiha',
      englishNameTranslation: 'The Opening',
      numberOfAyahs: 7,
      revelationType: 'Meccan',
    },
    {
      number: 1,
      name: 'سُورَةُ ٱلْفَاتِحَةِ',
      englishName: 'Al-Faatiha',
      englishNameTranslation: 'The Opening',
      numberOfAyahs: 7,
      revelationType: 'Meccan',
    },{
      number: 1,
      name: 'سُورَةُ ٱلْفَاتِحَةِ',
      englishName: 'Al-Faatiha',
      englishNameTranslation: 'The Opening',
      numberOfAyahs: 7,
      revelationType: 'Meccan',
    },
    {
      number: 1,
      name: 'سُورَةُ ٱلْفَاتِحَةِ',
      englishName: 'Al-Faatiha',
      englishNameTranslation: 'The Opening',
      numberOfAyahs: 7,
      revelationType: 'Meccan',
    }
  ];
  surahData: any =  {"code":200,"status":"OK","data":{"number":1,"name":"\u0633\u064f\u0648\u0631\u064e\u0629\u064f \u0671\u0644\u0652\u0641\u064e\u0627\u062a\u0650\u062d\u064e\u0629\u0650","englishName":"Al-Faatiha","englishNameTranslation":"The Opening","revelationType":"Meccan","numberOfAyahs":7,"ayahs":[{"number":1,"text":"\ufeff\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650","numberInSurah":1,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":2,"text":"\u0627\u0644\u0652\u062d\u064e\u0645\u0652\u062f\u064f \u0644\u0650\u0644\u0651\u064e\u0647\u0650 \u0631\u064e\u0628\u0651\u0650 \u0627\u0644\u0652\u0639\u064e\u0627\u0644\u064e\u0645\u0650\u064a\u0646\u064e","numberInSurah":2,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":3,"text":"\u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650","numberInSurah":3,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":4,"text":"\u0645\u064e\u0627\u0644\u0650\u0643\u0650 \u064a\u064e\u0648\u0652\u0645\u0650 \u0627\u0644\u062f\u0651\u0650\u064a\u0646\u0650","numberInSurah":4,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":5,"text":"\u0625\u0650\u064a\u0651\u064e\u0627\u0643\u064e \u0646\u064e\u0639\u0652\u0628\u064f\u062f\u064f \u0648\u064e\u0625\u0650\u064a\u0651\u064e\u0627\u0643\u064e \u0646\u064e\u0633\u0652\u062a\u064e\u0639\u0650\u064a\u0646\u064f","numberInSurah":5,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":6,"text":"\u0627\u0647\u0652\u062f\u0650\u0646\u064e\u0627 \u0627\u0644\u0635\u0651\u0650\u0631\u064e\u0627\u0637\u064e \u0627\u0644\u0652\u0645\u064f\u0633\u0652\u062a\u064e\u0642\u0650\u064a\u0645\u064e","numberInSurah":6,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false},{"number":7,"text":"\u0635\u0650\u0631\u064e\u0627\u0637\u064e \u0627\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e \u0623\u064e\u0646\u0652\u0639\u064e\u0645\u0652\u062a\u064e \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652 \u063a\u064e\u064a\u0652\u0631\u0650 \u0627\u0644\u0652\u0645\u064e\u063a\u0652\u0636\u064f\u0648\u0628\u0650 \u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652 \u0648\u064e\u0644\u064e\u0627 \u0627\u0644\u0636\u0651\u064e\u0627\u0644\u0651\u0650\u064a\u0646\u064e","numberInSurah":7,"juz":1,"manzil":1,"page":1,"ruku":1,"hizbQuarter":1,"sajda":false}],"edition":{"identifier":"quran-simple","language":"ar","name":"\u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064a\u0645 \u0627\u0644\u0645\u0628\u0633\u0637 (\u062a\u0634\u0643\u064a\u0644 \u0628\u0633\u064a\u0637)","englishName":"Simple","format":"text","type":"quran","direction":"rtl"}}};
  ;

  ngOnInit(): void {}
  toggleTheme(value: string) {
    this.currentTheme = value;
    console.log('DSDSd', event);
  }
}
