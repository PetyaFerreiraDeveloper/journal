import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';

export type JournalEntry = {
  _ownerId: string;
  title: string;
  category: string;
  journalEntry: string;
  blog: boolean;
  _createdOn: number;
  _editedOn: number;
  _id: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  shouldShowJournalComponent: boolean = false;
  journalEntries: JournalEntry[] = [
    {
      _ownerId: '35c62d76-8152-4626-8712-eeb96381bea8',
      title: 'We went to the zoo',
      category: 'Fun',
      journalEntry:
        'Today we went to the zoo and saw the lions eating their lunch',
      blog: true,
      _createdOn: 1617194128618,
      _editedOn: 1617194128618,
      _id: 'ff436770-76c5-40e2-b231-77409eda7a61',
    },
    {
      _ownerId: '847ec027-f659-4086-8032-5173e2f9c93a',
      title: 'server implemented',
      category: 'Study',
      journalEntry:
        'Today i started looking at options to implement softuni server for my project',
      blog: true,
      _createdOn: 1617194128618,
      _editedOn: 1617194128618,
      _id: '1840a313-225c-416a-817a-9954d4609f7c',
    },
    {
      _ownerId: '847ec027-f659-4086-8032-5173e2f9c93a',
      title: 'server implemented',
      category: 'Study',
      journalEntry:
        'Today i started looking at options to implement softuni server for my project',
      blog: true,
      _createdOn: 1617194128618,
      _editedOn: 1617194128618,
      _id: '1840a313-225c-416a-817a-9954d4609f7c',
    },
  ];
  constructor(
    private http: HttpClient,
    private journalService: JournalService
  ) {}

  ngOnInit(): void {
    // this.http
    //   .get('https://jsonplaceholder.typicode.com/todos/1')
    //   .subscribe((response) => console.log('jsonplaceholder', response));
    // this.http
    //   .get('http://localhost:3030/data/journals')
    //   .subscribe((response) => console.log(response));
  }

  handleCreateOrDestroyJournalEntry(): void {
    this.shouldShowJournalComponent = !this.shouldShowJournalComponent;
  }
}
