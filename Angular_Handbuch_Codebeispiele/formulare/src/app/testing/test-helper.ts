import { ɵgetDOM as getDOM } from '@angular/platform-browser';

export function dispatchEvent(element: any, eventType: any) {
  getDOM().dispatchEvent(element, new Event(eventType));
}

export function setInputValue(input: any, value: any) {
  input.value = value;
  dispatchEvent(input, 'input');
  dispatchEvent(input, 'blur');
}
