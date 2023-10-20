import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { AppRoutingModule } from './app-routing.module';
import { TimeFormatPipe } from './time-format.pipe';

@NgModule({
  declarations: [AppComponent, EventListComponent, TimeFormatPipe],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
