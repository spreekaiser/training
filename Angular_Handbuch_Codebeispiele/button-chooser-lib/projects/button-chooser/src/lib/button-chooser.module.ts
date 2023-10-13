import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonChooserBemComponent } from './button-chooser-bem/button-chooser-bem.component';
import { ButtonChooserComponent } from './button-chooser.component';



@NgModule({
  declarations: [
    ButtonChooserComponent,
    ButtonChooserBemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonChooserComponent,
    ButtonChooserBemComponent
  ]
})
export class ButtonChooserModule { }
