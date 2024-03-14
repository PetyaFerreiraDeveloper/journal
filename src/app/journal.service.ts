import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { JournalEntry } from './types/journal';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  constructor(private httpClient: HttpClient) {}

  getJournals$(): Observable<JournalEntry[]> {
    const { apiUrl } = environment;
    return this.httpClient.get<JournalEntry[]>(`${apiUrl}/journals`);
  }
}
