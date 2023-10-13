import {TestBed, waitForAsync} from '@angular/core/testing';
import {AbstractControl, FormsModule} from '@angular/forms';
import {TaskService} from '../services/task-service/task.service';
import {UserService} from '../services/user.service';
import {ShowErrorComponent} from '../show-error/show-error.component';
import {setInputValue} from '../testing/test-helper';
import {TemplateDrivenFormComponent} from './template-driven-form.component';
import {CustomValidatorsModule} from "../models/custom-validators.module";

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [FormsModule, CustomValidatorsModule],
    providers: [TaskService, UserService],
    declarations: [TemplateDrivenFormComponent,
      ShowErrorComponent]
  }).compileComponents();
});

describe('Template driven form', () => {

  it('should validate the title correctly', async () => {
    const fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    fixture.autoDetectChanges(true);
    await fixture.whenStable();

    const form = fixture.componentInstance.ngForm.form;

    const titleControl = form.get('title') as AbstractControl;
    expect(titleControl.errors!['required']).toBeTruthy();

    titleControl.setValue('Task');
    expect(titleControl.errors!['required']).toBeUndefined();
    const minError = {requiredLength: 5, actualLength: 4};
    expect(titleControl.errors!['minlength']).toEqual(minError);

    titleControl.setValue('Task 1');
    expect(titleControl.errors).toBeNull();
  });

  it('should validate the email field', async () => {
    const fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    fixture.autoDetectChanges(true);
    await fixture.whenStable();
    const element = fixture.nativeElement;
    const emailInput = element.querySelector('#assignee_email');
    setInputValue(emailInput, 'foo');
    expect(element.querySelector('.alert-danger').textContent)
      .toContain('Bitte geben Sie eine gültige E-Mail-Adresse an');
  });

  it('should validate the email field (with waitForAsync)', waitForAsync(() => {
    const fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    fixture.autoDetectChanges(true);
    fixture.whenStable().then(() => {
      const element = fixture.nativeElement;
      const emailInput = element.querySelector('#assignee_email');
      setInputValue(emailInput, 'foo');
      expect(element.querySelector('.alert-danger').textContent)
        .toContain('Bitte geben Sie eine gültige E-Mail-Adresse an');
    })
  }));

  it('should show no error for valid email adresses', (async () => {
    const fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    fixture.autoDetectChanges(true);
    await fixture.whenStable();
    const element = fixture.nativeElement;
    const emailInput = element.querySelector('#assignee_email');
    setInputValue(emailInput, 'foo@mycompany.com');
    expect(element.querySelector('.alert-danger')).toBeNull();
  }));

  it('should show no error for valid email adresses (waitForAsync)', waitForAsync(() => {
    const fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    fixture.autoDetectChanges(true);
    fixture.whenStable().then(() => {
      const element = fixture.nativeElement;
      const emailInput = element.querySelector('#assignee_email');
      setInputValue(emailInput, 'foo@mycompany.com');
      expect(element.querySelector('.alert-danger')).toBeNull();
    });
  }));


});
