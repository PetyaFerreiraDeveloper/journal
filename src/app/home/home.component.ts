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
  journalEntries: JournalEntry[] = [];
  constructor(private journalService: JournalService) {}

  ngOnInit(): void {
    this.journalService.getJournals$().subscribe((journalEntries) => {
      this.journalEntries = journalEntries;
      console.log('observable', this.journalEntries);
    });
  }

  handleCreateOrDestroyJournalEntry(): void {
    this.shouldShowJournalComponent = !this.shouldShowJournalComponent;
  }
}
