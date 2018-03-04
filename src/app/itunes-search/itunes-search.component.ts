import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-itunes-search',
  templateUrl: './itunes-search.component.html',
  styleUrls: ['./itunes-search.component.scss']
})
export class ItunesSearchComponent {
  @Input() results: Observable<any>;
  @Output() searchEvent: EventEmitter<any> = new EventEmitter();
  
  searchBox: FormControl = new FormControl();
  
  constructor() {
    this.searchBox
      .valueChanges
      .debounceTime(200)
      .subscribe((event) => this.searchEvent.emit(event));
  }
  
}
