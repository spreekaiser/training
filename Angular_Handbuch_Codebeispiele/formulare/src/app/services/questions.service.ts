

import {Injectable} from '@angular/core';

export type QuestionType = 'TEXT' | 'LONGTEXT' | 'CHOICE';

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  choices?: string[];
  required?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questions: Question[] = [
    {
      id: '1',
      text: 'Seit wann entwickeln Sie Software?',
      type: 'TEXT',
      required: true
    }, {
      id: '2',
      text: 'Bitte beschreiben Sie Ihr letztes Angular-Projekt',
      type: 'LONGTEXT',
    }, {
      id: '3',
      text: 'Würden Sie Angular weiterempfehlen?',
      type: 'CHOICE',
      choices: ['Ja', 'Nein', 'Vielleicht'],
      required: true
    }
  ];

  loadQuestions() {
    return this.questions;
  }

  saveAnswers(answers: any) {
    console.log('Saving answers... ', answers);
  }

}
