import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export function asyncIfNotBacklogThenAssignee(control: AbstractControl): Promise<ValidationErrors | null> {
  const promise = new Promise<ValidationErrors | null>((resolve, reject) => {
    setTimeout(() => {
      resolve(ifNotBacklogThanAssignee(control));
    }, 500);
  });
  return promise;
}

export function ifNotBacklogThanAssignee(formGroup: AbstractControl): ValidationErrors | null {
  const nameControl = formGroup.get('assignee.name');
  const stateControl = formGroup.get('state');
  if (!nameControl || !stateControl) {
    return null;
  }
  if (stateControl.value !== 'BACKLOG' &&
    (!nameControl.value || nameControl.value === '')) {
    return {'assigneeRequired': true};
  }
  return null;
}

@Directive({
  selector: '[pjmIfNotBacklogThanAssignee]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IfNotBacklogThanAssigneeValidatorDirective, multi: true
    }]
})
export class IfNotBacklogThanAssigneeValidatorDirective {

  public validate(formGroup: AbstractControl): {[key: string]: any} | null {
    const nameControl = formGroup.get('assignee.name');
    const stateControl = formGroup.get('state');
    if (!nameControl || !stateControl) {
      return null;
    }
    if (stateControl.value !== 'BACKLOG' && !nameControl.value) {
      return {'assigneeRequired': true};
    }
    return null;
  }
}

@Directive({
  selector: '[pjmEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useClass: EmailValidatorDirective,
    multi: true
  }]
})
export class EmailValidatorDirective {
  validate(control: AbstractControl): ValidationErrors | null {
    const re = /^[A-Za-z0-9._%+-]+@mycompany.com$/i;
    if (!control.value || control.value === '' || re.test(control.value)) {
      return null;
    } else {
      return {invalidEMail: true};
    }
  }
}

export function emailValidator(control: AbstractControl): ValidationErrors | null {
  return new EmailValidatorDirective().validate(control);
}

export function emailValidator2(control: AbstractControl): ValidationErrors | null {
  const re = /^[A-Za-z0-9._%+-]+@mycompany.com$/i;
  if (!control.value || control.value === '' || re.test(control.value)) {
    return null;
  } else {
    return {invalidEMail: true};
  }
}

@Directive({
  selector: '[pjmUserExistsValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UserExistsValidatorDirective), multi: true
    }
  ]
})
export class UserExistsValidatorDirective {
  constructor(private userService: UserService) {
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    console.log('Validating User');
    return this.userService.checkUserExists(control.value).pipe(
      map(userExists => !userExists ? {userNotFound: true} : null));
  }
}

@Directive({
  selector: '[pjmEmailValidator]',
  providers: [
    {provide: NG_VALIDATORS, useValue: emailValidator, multi: true}
  ]
})
export class EmailValidatorWithFunctionDirective {
}
