import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonChooserModule } from 'ch-button-chooser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonChooserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
