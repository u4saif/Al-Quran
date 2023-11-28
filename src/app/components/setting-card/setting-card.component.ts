import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-setting-card',
  templateUrl: './setting-card.component.html',
  styleUrls: ['./setting-card.component.scss'],
})
export class SettingCardComponent implements OnInit {
  @Output() settinFormData: EventEmitter<object> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  QuranText = 'Simple2';
  updateSetting(data: any) {
   
    this.settinFormData.emit(data.value);
  }
}
