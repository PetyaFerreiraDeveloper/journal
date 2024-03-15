import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';
import { JournalEntry } from '../types/journal';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css'],
})
export class JournalListComponent implements OnInit {
  journalEntries: JournalEntry[] = [];
  constructor(private journalService: JournalService) {}

  ngOnInit(): void {
    this.journalService.getAllJournals$().subscribe((journals) => {
      this.journalEntries = journals;
      console.log(journals);
    });
  }
}
