import {Component, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
import {Choice, Question} from '../models/question';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'pjm-button-chooser',
  templateUrl: './button-chooser.component.html',
  styleUrls: ['./button-chooser.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ButtonChooserComponent,
      multi: true,
    }]
})
export class ButtonChooserComponent implements ControlValueAccessor  {
  @Input() choices?: string[];

  value?: string;
  isDisabled = false;
  propagateChange!: (value: any) => void;
  propagateTouched!: () => void;

  onBlur(isLast: boolean) {
    if (isLast) {
      this.propagateTouched();
    }
  }

  public writeValue(value: any) {
      this.value = value;
  }

  public registerOnChange(fn: (value: any) => void) {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: () => void) {
    this.propagateTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    this.isDisabled = disabled;
  }

  changeValue(value: string) {
    this.value = value;
    this.propagateChange(this.value);
    this.propagateTouched();
    return false;
  }
}
