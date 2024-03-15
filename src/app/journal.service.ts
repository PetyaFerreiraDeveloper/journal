import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CreateJournalEntry, JournalEntry } from './types/journal';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getAllJournals$(): Observable<JournalEntry[]> {
    return this.httpClient.get<JournalEntry[]>(`${this.apiUrl}`);
  }

  getAllByOwner$(ownerId: string): Observable<JournalEntry[]> {
    return this.httpClient.get<JournalEntry[]>(
      `${this.apiUrl}?where=_ownerId%3D%22${ownerId}%22`
    );
  }

  getAllBlogs$(): Observable<JournalEntry[]> {
    return this.httpClient.get<JournalEntry[]>(
      `${this.apiUrl}?where=blog%3Dtrue`
    );
  }

  getOne$(journalId: string): Observable<JournalEntry> {
    return this.httpClient.get<JournalEntry>(`${this.apiUrl}/${journalId}`);
  }

  create$(journalEntry: CreateJournalEntry): Observable<CreateJournalEntry> {
    return this.httpClient.post<CreateJournalEntry>(this.apiUrl, journalEntry);
  }
}
