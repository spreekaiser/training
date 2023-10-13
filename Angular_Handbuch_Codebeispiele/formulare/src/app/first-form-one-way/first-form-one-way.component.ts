import {Component} from '@angular/core';

interface Task {
  title: string;
  description: string;
}

@Component({
  selector: 'pjm-first-form-one-way',
  templateUrl: 'first-form-one-way.component.html',
})
export class FirstFormOneWayComponent {
  task: Task ;

  constructor() {
    this.task = {
      title: 'Neues Entwickler-Team zusammenstellen',
      description: 'Notwendige Kenntnisse Angular & TypeScript',
    };
  }

  saveTask(value: Task) {
    this.task = value;
  }
}
