import {PanelComponent} from './panel.component';
import {ContentChildren, Directive, Input, QueryList} from '@angular/core';
import { TabComponent } from "../tabs/tabs.component";

@Directive({
  selector: 'ch-accordion, [chAccordion]',
  exportAs: 'accordion'
})
export class Accordion {
  @Input() onlyOneOpen = false;

  @ContentChildren(PanelComponent) panels!: QueryList<PanelComponent>;

  ngAfterContentInit() {
    for (const panel of this.panels.toArray()) {
      panel.open = false;
      panel.panelToggled.subscribe(panel => {
        if (panel.open && this.onlyOneOpen) {
          this.closeOthers(panel);
        }
      });
    }
  }

  closeOthers(opened: PanelComponent) {
    for (const panel of this.panels.toArray()) {
      if (opened !== panel && panel.open) {
        panel.open = false;
      }
    }
  }


  closeAll() {
    console.log(this.panels.toArray());
    for (const panel of this.panels.toArray()) {
      panel.open = false;
    }
  }
}
