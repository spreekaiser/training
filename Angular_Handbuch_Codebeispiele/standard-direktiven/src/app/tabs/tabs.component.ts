import {Component, ContentChildren, QueryList, AfterContentInit, Input} from '@angular/core';

@Component({
  selector: 'ch-tab',
  template: `<div *ngIf="active" class="tab-content">
                 <ng-content></ng-content>
             </div>`
})
export class TabComponent {
  active: boolean;
  @Input() title =  '';
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

  activate(tab: TabComponent) {
    for (const oldTab of this.tabs.toArray()) {
      oldTab.active = false;
    }
    tab.active = true;
  }
}

export var TABS_DIRECTIVES = [TabsComponent, TabComponent];
