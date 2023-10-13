import { TestBed, waitForAsync } from '@angular/core/testing';

import { CalculateTheAnswerService } from './calculate-the-answer.service';

describe('CalculateTheAnswerService', () => {
  let service: CalculateTheAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateTheAnswerService);
  });

  it('should calculate the right answer', waitForAsync(() => {
    service.calculate().subscribe(answer => {
      expect(answer).toBe(42);
    })
  }));
});
