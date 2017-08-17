import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { BookComponent } from './entries/book/book.component';
import { MovieComponent } from './entries/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CookieModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
