import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateTheAnswerService {
  calculate(): Observable<number> {
    return of(42).pipe(
      delay(200)
    )
  }
}
