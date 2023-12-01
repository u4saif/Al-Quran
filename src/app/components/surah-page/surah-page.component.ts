import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-surah-page',
  templateUrl: './surah-page.component.html',
  styleUrls: ['./surah-page.component.scss'],
})
export class SurahPageComponent implements OnInit, OnChanges {
  bismillah: string =
    '\ufeff\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650';
  @Input() surah: any;
  audioURL: string = '';
  showAudioPlayer: boolean = false;
  currentAyatPlaying: any = {
    number: 1,
    audio: '',
    numberInSurah: 1,
    juz: 1,
  };

  translationVisiable:boolean = true;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.audioURL = '';
    this.showAudioPlayer = false;
  }
  playAyat(item: any,ayatNumber:number) {
    console.warn(item);
    this.currentAyatPlaying = {
      number: ayatNumber,
      audio: item.juz,
      numberInSurah: item.juz,
      juz: item.juz,
    };
    this.showAudioPlayer = true;
    this.audioURL = item.audio;
  }

  toggleTranslation(){
    this.translationVisiable = !this.translationVisiable;
  }
}
