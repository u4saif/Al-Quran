import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Constants } from 'src/app/utils/constants';
@Component({
  selector: 'app-setting-card',
  templateUrl: './setting-card.component.html',
  styleUrls: ['./setting-card.component.scss'],
})
export class SettingCardComponent implements OnInit {
  @Output() settinFormData: EventEmitter<object> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.settinFormData.emit({
      QuranText: 'quran-uthmani',
      language: 'en',
      translationText: 'hi.hindi',
      translationAudio: 'ur.khan',
    });
  }
  QuranText = 'quran-uthmani';
  QuranTextOptions = Constants.QURAN_TEXT;
  language = 'en';
  LanguageOptions = Constants.LANGUAGES;
  TranslationText = 'hi.hindi';
  TranslationTextOption = Constants.TRANSLATION_TEXT;
  translationAudio = 'ur.khan';
  TranslationAudioOption = Constants.TRANSLATION_AUDIO;

  filterTranslation(data: any) {
    console.log(data);
    this.TranslationTextOption = Constants.TRANSLATION_TEXT.filter(
      (item) => item.language == data.language
    );
  }

  updateSetting(data: any) {
    this.settinFormData.emit(data.value);
  }
}
