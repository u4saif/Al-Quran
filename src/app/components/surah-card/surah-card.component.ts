import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-surah-card',
  templateUrl: './surah-card.component.html',
  styleUrls: ['./surah-card.component.scss'],
})
export class SurahCardComponent implements OnInit {
  @Input() card: Card = {
    number: 1,
    name: 'string',
    englishName: '',
    englishNameTranslation: '',
    numberOfAyahs: 1,
    revelationType: '',
  };

  @Output() surahChangeEvent:EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  surahChange(surahId:number){
    this.surahChangeEvent.emit(surahId)
  }
}

interface Card {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}
