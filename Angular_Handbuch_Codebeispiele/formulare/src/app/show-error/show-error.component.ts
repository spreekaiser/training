import {AfterViewInit, Component, Input, OnInit, Optional} from '@angular/core';
import {FormGroup, FormGroupDirective, NgForm, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'pjm-show-error',
  template: `
    <div *ngIf="errorMessages" class="alert alert-danger">
      <div *ngFor="let errorMessage of errorMessages">
        {{errorMessage}}
      </div>
    </div>`
})
export class ShowErrorComponent implements OnInit {

  @Input('path') path = '';
  @Input('text') displayName = '';

  private form!: FormGroup;

  constructor(@Optional() private ngForm: NgForm,
              @Optional() private formGroup: FormGroupDirective) {
  }

  ngOnInit() {
    this.form = this.ngForm ? this.ngForm.form : this.formGroup.form;
  }

  get errorMessages(): string[] | null {
    const control = this.form.get(this.path);
    if (!control || !(control.touched) || !control.errors) {
      return null;
    }
    control.status
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
          return `Bitte geben Sie eine gültige E-Mail-Adresse an`;
        case 'userNotFound':
          return `Der eingetragene Benutzer existiert nicht.`;
        default:
          return `${this.displayName} ist nicht valide`;
      }
    });
  }
}
