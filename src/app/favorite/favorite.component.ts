import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styles: [`.glyphicon-star { color: orangered }`]
})

export class FavoriteComponent {
  @Input('is-favorite') isFavorite = false;
  @Output() change = new EventEmitter();
  
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({
      fav : this.isFavorite
    });
  }
  
}
