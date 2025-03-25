import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Constants } from 'src/app/utils/constants';
@Component({
  selector: 'app-setting-card',
  templateUrl: './setting-card.component.html',
  styleUrls: ['./setting-card.component.scss'],
})
export class SettingCardComponent implements OnInit {
  @Output() settinFormData: EventEmitter<object> = new EventEmitter();
  LanguageOptions = Constants.LANGUAGES;
  TranslationTextOption = Constants.TRANSLATION_TEXT;
  TranslationAudioOption = Constants.TRANSLATION_AUDIO;
  QuranTextOptions = Constants.QURAN_TEXT;
  constructor() {}

  ngOnInit(): void {
    // this.settinFormData.emit({
    //   QuranText: 'quran-uthmani',
    //   language: 'en',
    //   translationText: 'hi.hindi',
    //   translationAudio: 'ur.khan',
    // });
    this.checkLocalStorage();
  }
  QuranText = 'quran-uthmani';
  language = 'en';
  translationText = 'hi.hindi';
  translationAudio = 'ur.khan';

  filterTranslation(data: any) {
    console.log(data);
    this.TranslationTextOption = Constants.TRANSLATION_TEXT.filter(
      (item) => item.language == data.language
    );
  }

  updateSetting(data: any) {
    localStorage.setItem(
      'setting',
      JSON.stringify({
        QuranText: this.QuranText,
        language: this.language,
        translationText: this.translationText,
        translationAudio: this.translationAudio,
      })
    );
    this.settinFormData.emit(data.value);
  }


  checkLocalStorage() {
    if (localStorage.getItem('setting')) {
      const setting = localStorage.getItem('setting')
        ? JSON.parse(localStorage.getItem('setting') as string)
        : null;
      this.QuranText = setting.QuranText;
      this.language = setting.language;
      this.translationText = setting.translationText;
      this.translationAudio = setting.translationAudio;
      this.settinFormData.emit({
        QuranText: this.QuranText,
        language: this.language,
        translationText: this.translationText,
        translationAudio: this.translationAudio,
      });
    } else {
      localStorage.setItem(
        'setting',
        JSON.stringify({
          QuranText: this.QuranText,
          language: this.language,
          translationText: this.translationText,
          translationAudio: this.translationAudio,
        })
      );
    }
  }
}
