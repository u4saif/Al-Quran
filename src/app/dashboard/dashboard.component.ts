import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentTheme = 'light';
  constructor() { }

  ngOnInit(): void {
  }
  toggleTheme(value:string){
    this.currentTheme=value
    console.log("DSDSd",event)
  }
}
