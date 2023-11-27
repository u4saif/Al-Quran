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
    },
  ];
  surahData: any = {
    code: 200,
    status: 'OK',
    data: {
      number: 1,
      name: '\u0633\u064f\u0648\u0631\u064e\u0629\u064f \u0671\u0644\u0652\u0641\u064e\u0627\u062a\u0650\u062d\u064e\u0629\u0650',
      englishName: 'Al-Faatiha',
      englishNameTranslation: 'The Opening',
      revelationType: 'Meccan',
      numberOfAyahs: 7,
      ayahs: [
        {
          number: 1,
          text: '\u0634\u0631\u0648\u0639 \u0627\u0644\u0644\u0647 \u06a9\u0627 \u0646\u0627\u0645 \u0644\u06d2 \u06a9\u0631 \u062c\u0648 \u0628\u0691\u0627 \u0645\u06c1\u0631\u0628\u0627\u0646 \u0646\u06c1\u0627\u06cc\u062a \u0631\u062d\u0645 \u0648\u0627\u0644\u0627 \u06c1\u06d2',
          numberInSurah: 1,
          juz: 1,
          manzil: 1,
          page: 1,
          ruku: 1,
          hizbQuarter: 1,
          sajda: false,
        },
        {
          number: 2,
          text: '\u0633\u0628 \u0637\u0631\u062d \u06a9\u06cc \u062a\u0639\u0631\u06cc\u0641 \u062e\u062f\u0627 \u06c1\u06cc \u06a9\u0648 (\u0633\u0632\u0627\u0648\u0627\u0631) \u06c1\u06d2 \u062c\u0648 \u062a\u0645\u0627\u0645 \u0645\u062e\u0644\u0648\u0642\u0627\u062a \u06a9\u0627 \u067e\u0631\u0648\u0631\u062f\u06af\u0627\u0631 \u06c1\u06d2',
          numberInSurah: 2,
          juz: 1,
          manzil: 1,
          page: 1,
          ruku: 1,
          hizbQuarter: 1,
          sajda: false,
        },
        {
          number: 3,
          text: '\u0628\u0691\u0627 \u0645\u06c1\u0631\u0628\u0627\u0646 \u0646\u06c1\u0627\u06cc\u062a \u0631\u062d\u0645 \u0648\u0627\u0644\u0627',
          numberInSurah: 3,
          juz: 1,
          manzil: 1,
          page: 1,
          ruku: 1,
          hizbQuarter: 1,
          sajda: false,
        },
        {
          number: 4,
          text: '\u0627\u0646\u0635\u0627\u0641 \u06a9\u06d2 \u062f\u0646 \u06a9\u0627 \u062d\u0627\u06a9\u0645',
          numberInSurah: 4,
          juz: 1,
          manzil: 1,
          page: 1,
          ruku: 1,
          hizbQuarter: 1,
          sajda: false,
        },
        {
          number: 5,
          text: '(\u0627\u06d2 \u067e\u0631\u0648\u0631\u062f\u06af\u0627\u0631) \u06c1\u0645 \u062a\u06cc\u0631\u06cc \u06c1\u06cc \u0639\u0628\u0627\u062f\u062a \u06a9\u0631\u062a\u06d2 \u06c1\u06cc\u06ba \u0627\u0648\u0631 \u062a\u062c\u06be \u06c1\u06cc \u0633\u06d2 \u0645\u062f\u062f \u0645\u0627\u0646\u06af\u062a\u06d2 \u06c1\u06cc\u06ba',
          numberInSurah: 5,
          juz: 1,
          manzil: 1,
          page: 1,
          ruku: 1,
          hizbQuarter: 1,
          sajda: false,
        },
        {
          number: 6,
          text: '\u06c1\u0645 \u06a9\u0648 \u0633\u06cc\u062f\u06be\u06d2 \u0631\u0633\u062a\u06d2 \u0686\u0644\u0627',
          numberInSurah: 6,
          juz: 1,
          manzil: 1,
          page: 1,
          ruku: 1,
          hizbQuarter: 1,
          sajda: false,
        },
        {
          number: 7,
          text: '\u0627\u0646 \u0644\u0648\u06af\u0648\u06ba \u06a9\u06d2 \u0631\u0633\u062a\u06d2 \u062c\u0646 \u067e\u0631 \u062a\u0648 \u0627\u067e\u0646\u0627 \u0641\u0636\u0644 \u0648\u06a9\u0631\u0645 \u06a9\u0631\u062a\u0627 \u0631\u06c1\u0627 \u0646\u06c1 \u0627\u0646 \u06a9\u06d2 \u062c\u0646 \u067e\u0631 \u063a\u0635\u06d2 \u06c1\u0648\u062a\u0627 \u0631\u06c1\u0627 \u0627\u0648\u0631 \u0646\u06c1 \u06af\u0645\u0631\u0627\u06c1\u0648\u06ba \u06a9\u06d2',
          numberInSurah: 7,
          juz: 1,
          manzil: 1,
          page: 1,
          ruku: 1,
          hizbQuarter: 1,
          sajda: false,
        },
      ],
      edition: {
        identifier: 'ur.jalandhry',
        language: 'ur',
        name: '\u062c\u0627\u0644\u0646\u062f\u06c1\u0631\u06cc',
        englishName: 'Fateh Muhammad Jalandhry',
        format: 'text',
        type: 'translation',
        direction: 'ltr',
      },
    },
  };

  ngOnInit(): void {}
  toggleTheme(value: string) {
    this.currentTheme = value;
    console.log('DSDSd', event);
  }
}
