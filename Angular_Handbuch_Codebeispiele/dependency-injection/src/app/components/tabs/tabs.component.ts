import {Component, ContentChildren, QueryList, AfterContentInit, Input} from '@angular/core';

@Component({
  selector: 'ch-tab',
  template: `<div *ngIf="active" class="tab-content">
                 <ng-content></ng-content>
             </div>`
})
export class TabComponent {
  active: boolean;
  @Input() title = '';
  constructor() {
    this.active = false;
  }
}

@Component({
  selector: 'ch-tabs',
  styleUrls: ['tabs.component.css'],
  templateUrl: 'tabs.component.html'})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit() {
    this.tabs.first.active = true;
  }

  activate(tab_: TabComponent) {
    for (const tab of this.tabs.toArray()) {
      tab.active = false;
    }
    tab_.active = true;
  }
}

export const TABS_DIRECTIVES = [TabsComponent, TabComponent];
