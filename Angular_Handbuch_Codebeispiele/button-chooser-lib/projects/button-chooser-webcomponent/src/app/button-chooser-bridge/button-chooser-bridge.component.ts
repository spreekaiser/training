import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button-chooser-bridge',
  templateUrl: './button-chooser-bridge.component.html',
  styleUrls: ['./button-chooser-bridge.component.css']
})
export class ButtonChooserBridgeComponent {
  @Input() choices = [];
  @Input() value?: string;
  @Input() choicesString = '';
  @Output() valueChanged = new EventEmitter();
  ngOnChanges(changes: SimpleChanges) {
    if (changes['choicesString']) {
        this.choices = changes['choicesString'].currentValue?.split(',');
    }
  }

}

