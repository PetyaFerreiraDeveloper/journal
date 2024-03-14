import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';
import { JournalEntry } from '../types/journal';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  shouldShowJournalComponent: boolean = false;
  journalEntries: JournalEntry[] = [];

  
  constructor(
    private journalService: JournalService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService
      .login$()
      .subscribe((login) => console.log('can i login', login));

    this.journalService.getAllJournals$().subscribe((journalEntries) => {
      this.journalEntries = journalEntries;
      console.log('observable', this.journalEntries);
    });

    this.journalService
      .getAllByOwner$('35c62d76-8152-4626-8712-eeb96381bea8')
      .subscribe((journalEntries) => {
        console.log('entries by owner', journalEntries);
      });

    this.journalService
      .getAllShared$()
      .subscribe((blogs) => console.log('blogs', blogs));
  }

  handleCreateOrDestroyJournalEntry(): void {
    this.shouldShowJournalComponent = !this.shouldShowJournalComponent;
  }
}
