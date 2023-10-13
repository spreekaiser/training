import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ch-button-chooser',
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

  constructor(private cd: ChangeDetectorRef) {}

  @Input() choices?: string[];

  @Input() value?: string;

  @Output() valueChanged = new EventEmitter<string>();

  isDisabled = false;
  propagateChange!: (value: any) => void;
  propagateTouched!: () => void;

  onBlur(isLast: boolean) {
    if (isLast) {
      this.propagateTouched?.();
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
    this.valueChanged.emit(value);
    this.propagateChange?.(this.value);
    this.propagateTouched?.();
    this.cd.detectChanges();
    return false;
  }
}
