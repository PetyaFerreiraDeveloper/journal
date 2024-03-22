import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CreateJournalEntry, JournalEntry } from '../types/journal';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  apiUrl = environment.apiUrl;
  USER_KEY = '[user]';

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
    const localStorageUser = localStorage.getItem(this.USER_KEY) || '';
    const user = JSON.parse(localStorageUser);
    const accessToken = user.accessToken;

    const headers = new HttpHeaders({
      'X-Authorization': accessToken,
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.httpClient.post<CreateJournalEntry>(
      this.apiUrl,
      journalEntry,
      options
    );
  }

  edit$(
    journalEntryId: string,
    journalEntry: JournalEntry
  ): Observable<JournalEntry> {
    const localStorageUser = localStorage.getItem(this.USER_KEY) || '';
    const user = JSON.parse(localStorageUser);
    const accessToken = user.accessToken;

    const headers = new HttpHeaders({
      'X-Authorization': accessToken,
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.httpClient.put<JournalEntry>(
      `${this.apiUrl}/${journalEntryId}`,
      journalEntry,
      options
    );
  }

  delete$(journalEntryId: string): Observable<JournalEntry> {
    const localStorageUser = localStorage.getItem(this.USER_KEY) || '';
    const user = JSON.parse(localStorageUser);
    const accessToken = user.accessToken;

    const headers = new HttpHeaders({
      'X-Authorization': accessToken,
    });
    const options = { headers };
    return this.httpClient.delete<JournalEntry>(
      `${this.apiUrl}/${journalEntryId}`,
      options
    );
  }
}
