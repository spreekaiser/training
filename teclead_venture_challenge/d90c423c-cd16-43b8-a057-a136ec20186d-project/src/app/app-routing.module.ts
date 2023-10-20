import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [{ path: 'events', component: EventListComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AppRoutingModule {}
