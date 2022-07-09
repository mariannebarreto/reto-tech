import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CardComponent } from './components/card.component';
import { BlueFontComponent } from './components/styles/blue/blue-font.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BlueFontComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
