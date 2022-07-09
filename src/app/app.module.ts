import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { IconComponent } from './components/container/iconContainer.component';
import { BulbComponent } from './components/bulb/bulb.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    IconComponent, 
    BulbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
