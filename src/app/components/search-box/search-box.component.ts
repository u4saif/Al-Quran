import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  @Input('searchKeys') searchKeys: Array<string> = [];
  @Input('orignalData') OrignalData: any;
  @Output('searchKey') searchedData: EventEmitter<any> = new EventEmitter();

  startSearch(event: any) {
    let value = event.target.value.toLowerCase();
    this.searchedData.emit(value);
  }
}
