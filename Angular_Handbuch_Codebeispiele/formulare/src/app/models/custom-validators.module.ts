import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponent } from "..";
import { IfNotBacklogThanAssigneeValidatorDirective, UserExistsValidatorDirective, EmailValidatorDirective } from "./custom-validators";

@NgModule({
    imports: [CommonModule],
    declarations: [
        IfNotBacklogThanAssigneeValidatorDirective,
        UserExistsValidatorDirective, 
        EmailValidatorDirective
    ],
    exports: [
        IfNotBacklogThanAssigneeValidatorDirective,
        UserExistsValidatorDirective, 
        EmailValidatorDirective
    ]
})
export class CustomValidatorsModule {
}