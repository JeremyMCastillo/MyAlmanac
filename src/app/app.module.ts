import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { HttpModule } from '@angular/http';

import { AlmanacService } from './almanac.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { EntryComponent } from './entries/entry/entry.component';
import { HomeComponent } from './common/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EntryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CookieModule.forRoot()
  ],
  providers: [AlmanacService],
  bootstrap: [AppComponent]
})
export class AppModule { }
