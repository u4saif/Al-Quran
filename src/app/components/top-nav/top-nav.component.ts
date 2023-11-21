import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Output() toggleTheme : EventEmitter<string> = new EventEmitter();
  darkthemeMode= false;
  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(){
    this.darkthemeMode = !this.darkthemeMode;
    let currentTheme = (this.darkthemeMode) ? 'dark' : 'light';
    this.toggleTheme.emit(currentTheme);
  }
}
