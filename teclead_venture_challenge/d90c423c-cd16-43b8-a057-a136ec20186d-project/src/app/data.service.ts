import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'https://teclead-ventures.github.io/data/london-events.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getEventData(): Observable<any> {
    return this.http.get(apiUrl);
  }
}
