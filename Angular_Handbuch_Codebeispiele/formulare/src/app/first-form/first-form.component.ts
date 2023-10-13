import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import { NgForm, FormGroup} from '@angular/forms';

@Component({
  selector: 'pjm-first-form',
  templateUrl: 'first-form.component.html'
})
export class FirstFormComponent implements AfterViewInit, OnInit {

  @ViewChild(NgForm) private ngForm!: NgForm;

  private form!: FormGroup;

  ngOnInit() {
  }

  saveTask(value: any) {
    console.log(value);
  }

  ngAfterViewInit() {
    console.log('AVIEW', this.ngForm.form)
    setTimeout(() => {
      console.log(this.ngForm.form);
    }, 500);
  }
}
