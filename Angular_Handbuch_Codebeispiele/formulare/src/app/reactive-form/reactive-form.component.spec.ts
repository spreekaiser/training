import {
  AbstractControl,
  FormControl, FormsModule, ReactiveFormsModule
} from '@angular/forms';
import {TestBed, ComponentFixture} from '@angular/core/testing';
import {ReactiveFormComponent} from './reactive-form.component';
import {TaskService} from '../services/task-service/task.service';
import {UserService} from '../services/user.service';

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [ReactiveFormsModule],
    providers: [TaskService, UserService],
    declarations: [ReactiveFormComponent]
  });
});

describe('Reactive Form', () => {
  it('should validate the title directly', () => {

    const fixture = TestBed.createComponent(ReactiveFormComponent);
    const form = fixture.componentInstance.taskForm;

    const titleControl: AbstractControl = form.get('title') as AbstractControl;
    expect(titleControl.errors!['required']).toBeTruthy(); // Cannot read property 'errors' of undefined

    titleControl.setValue('Task');
    expect(titleControl.errors!['required']).toBeUndefined();
    const minError = {requiredLength: 5, actualLength: 4};

    expect(titleControl.errors!['minlength']).toEqual(minError);
    titleControl.setValue('Task 1');
    expect(titleControl.errors).toBeNull();
  });
}

/*
  it('should validate the whole form ', fakeAsync(() => {

    const fixture = TestBed.createComponent(ReactiveFormComponent);

    const form = fixture.componentInstance.taskForm;

    console.log(form.patchValue({title: 'Task123'}));
    fixture.detectChanges();
    tick(5000);
    fixture.detectChanges();
    tick(50000);
    console.log(form.valid)


  }));

*/
  );
