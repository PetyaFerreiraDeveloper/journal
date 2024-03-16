import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../journal.service';
import { JournalEntry } from '../../types/journal';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css'],
})
export class JournalListComponent implements OnInit {
  journalEntries: JournalEntry[] = [];
  isLoading: boolean = true;
  constructor(private journalService: JournalService) {}

  ngOnInit(): void {
    this.journalService.getAllJournals$().subscribe({
      next: (journals) => {
        this.journalEntries = journals;
        this.isLoading = false;
        console.log(journals);
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error: ', err);
      },
    });
  }
}
