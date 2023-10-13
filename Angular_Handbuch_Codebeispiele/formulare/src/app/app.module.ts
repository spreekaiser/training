import {RegisterFormComponent} from './register-form/register-form.component';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ShowErrorComponent} from './show-error/show-error.component';
import {BrowserModule} from '@angular/platform-browser';
import {FirstFormTwoWayComponent} from './first-form-two-way/first-form-two-way.component';
import {FirstFormOneWayComponent} from './first-form-one-way/first-form-one-way.component';
import {GeneratedFormComponent} from './generated-form/generated-form.component';
import {FirstFormComponent} from './first-form/first-form.component';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TabsModule} from './tabs/tabs.module';
import {ButtonChooserComponent} from './button-chooser/button-chooser.component';
import { CustomValidatorsModule } from './models/custom-validators.module';
import {ShowErrorComponentTemplateDriven} from "./show-error/show-error-component-template-driven";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, TabsModule, CustomValidatorsModule],
  declarations: [
    AppComponent,
    ShowErrorComponent,
    ShowErrorComponentTemplateDriven,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    GeneratedFormComponent,
    FirstFormComponent,
    FirstFormOneWayComponent,
    FirstFormTwoWayComponent,
    RegisterFormComponent,
    ButtonChooserComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
