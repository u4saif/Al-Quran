import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-surah-page',
  templateUrl: './surah-page.component.html',
  styleUrls: ['./surah-page.component.scss']
})
export class SurahPageComponent implements OnInit {
  bismillah : string = "\ufeff\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u0650";
  @Input() surah :any; 
  constructor() { }

  ngOnInit(): void {
  }

}