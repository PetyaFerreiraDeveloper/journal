import { Injectable } from '@angular/core';
import { JournalEntry } from './home/home.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  constructor(private httpClient: HttpClient) {}

  getJournals$(): Observable<JournalEntry[]> {
    return this.httpClient.get<JournalEntry[]>(
      'http://localhost:3030/data/journals'
    );
  }
}
