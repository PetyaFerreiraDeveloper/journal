import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';
import { JournalEntry } from '../types/journal';

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
