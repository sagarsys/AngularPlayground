import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItunesSearchComponent } from './itunes-search/itunes-search.component';
import { HttpModule } from '@angular/http';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikesCountComponent } from './likes-count/likes-count.component';
import { VoteToggleComponent } from './vote-toggle/vote-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ItunesSearchComponent,
    FavoriteComponent,
    LikesCountComponent,
    VoteToggleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
