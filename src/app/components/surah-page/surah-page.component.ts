import { Component, ElementRef, Input, OnChanges, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-surah-page',
  templateUrl: './surah-page.component.html',
  styleUrls: ['./surah-page.component.scss'],
})
export class SurahPageComponent implements OnInit, OnChanges {
  bismillah: string =
    '\ufeff\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650';
  @Input() surah: any;
  @ViewChildren('listItem') listItems!: QueryList<ElementRef>;
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
    this.currentAyatPlaying = {
      number: ayatNumber,
      audio: item.juz,
      numberInSurah: item.juz,
      juz: item.juz,
    };
    this.showAudioPlayer = true;
    this.audioURL = item.audio;
    const ayatPlaying = this.listItems.toArray()[ayatNumber-1];
    if (ayatPlaying) {
      ayatPlaying.nativeElement.style.backgroundColor = '#fff00054';
      ayatPlaying.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      console.log(`The ${ayatNumber}th <li> does not exist.`);
    }
  }

  nextAyatPlayed(event:any){ 
    this.playAyat(event,event.numberInSurah);
  }
  toggleTranslation(){
    this.translationVisiable = !this.translationVisiable;
  }
}
