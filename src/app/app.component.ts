import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  template: `
    <app-itunes-search
		  (searchEvent)="onSearch($event)"
		  [results]="data">
    </app-itunes-search>`,
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    isFavorite: true
  };
  data: Observable<any>;
  private dataObserver: Observer<any>;
  
  constructor(private http: Http) {
    this.data = new Observable(observer => this.dataObserver = observer);
  }
  
  onFavoriteChange($event: Event) {
    console.log($event);
  }
  
  onSearch(event) {
    this.http.get(`https://itunes.apple.com/search?term=${event}&attribute=allArtistTerm`)
      .map((response) => {
        const artists = response.json();
        console.log(artists.results);
        return artists.results;
      }).subscribe(
        result => this.dataObserver.next(result),
        err => console.log('Could not load artists', err)
    );
  }
  
}
