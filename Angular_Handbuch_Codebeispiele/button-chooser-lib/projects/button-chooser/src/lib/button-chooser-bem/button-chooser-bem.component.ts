import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
selector: 'ch-button-chooser-bem',
templateUrl: './button-chooser-bem.component.html',
styleUrls: ['./button-chooser-bem.component.css'],
encapsulation: ViewEncapsulation.None,
changeDetection: ChangeDetectionStrategy.OnPush,
providers: [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ButtonChooserBemComponent),
    multi: true,
  }]
})
export class ButtonChooserBemComponent implements ControlValueAccessor  {
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

