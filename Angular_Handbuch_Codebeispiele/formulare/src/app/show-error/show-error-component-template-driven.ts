import {Component, Input} from '@angular/core';
import {FormGroup, NgForm, ValidationErrors} from '@angular/forms';


@Component({
  selector: 'pjm-show-error-template-driven',
  template: `
    <div *ngIf="errorMessages" class="alert alert-danger">
      <div *ngFor="let errorMessage of errorMessages">
        {{errorMessage}}
      </div>
    </div>`
})
export class ShowErrorComponentTemplateDriven {
  @Input('path') controlPath = '';
  @Input('text') displayName = '';

  constructor(private ngForm: NgForm) {
  }

  get errorMessages(): string[] | null {
    const form: FormGroup = this.ngForm.form;
    const control = form.get(this.controlPath);
    if (!control || !(control.touched) || !control.errors) {
      return null;
    }
    return this.getDisplayMessages(control.errors);
  }

  private getDisplayMessages(errors: ValidationErrors): string[] {
    return Object.entries(errors).map(([errorCode, error]) => {
      switch (errorCode) {
        case 'required':
          return `${this.displayName} ist ein Pflichtfeld`;
        case 'minlength':
          return `${this.displayName} muss mindestens ${error.requiredLength} Zeichen enthalten`;
        case 'maxlength':
          return `${this.displayName} darf maximal ${error.requiredLength} Zeichen enthalten`;
        case 'invalidEMail':
          return `Bitte geben Sie eine gültige E-Mail Adresse an`;
        case 'userNotFound':
          return `Der eingetragene Benutzer existiert nicht.`;
        default:
          return `${this.displayName} ist nicht valide`;
      }
    });
  }
}
