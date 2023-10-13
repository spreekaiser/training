import { TimePickerComponent } from './time-picker.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TimePicker Component', () => {

  let timePicker: TimePickerComponent;
  let fixture: ComponentFixture<TimePickerComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimePickerComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(TimePickerComponent);
    timePicker = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize the TimePicker correctly', () => {
    expect(timePicker.getTime()).toEqual('00:00:00')
  })

  it('should change hour-values when clicking buttons', () => {
    const element = fixture.nativeElement;
    const shadowRoot = element.shadowRoot;
    timePicker.timeString = '12:20:23';
    timePicker.ngOnChanges({});
    fixture.detectChanges();
    let input = shadowRoot.querySelector('#hours > input');
    expect(input.value).toBe('12');
    input = shadowRoot.querySelector('#minutes > input');
    expect(input.value).toBe('20');
    input = shadowRoot.querySelector('#seconds > input');
    expect(input.value).toBe('23');
  });

  it('should change hour-values when clicking buttons', () => {

    (<any>timePicker).timeString = '12:20:23';
    timePicker.ngOnChanges({});
    fixture.detectChanges();
    const [incButton, decButton] = fixture.nativeElement.shadowRoot
      .querySelectorAll('#hours > button');
    incButton.click();
    expect(timePicker.getTime()).toEqual('13:20:23');

    decButton.click();
    decButton.click();
    expect(timePicker.getTime()).toEqual('11:20:23');
  });
});
