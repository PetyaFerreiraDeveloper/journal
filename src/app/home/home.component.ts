import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';
import { CreateJournalEntry, JournalEntry } from '../types/journal';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  journalEntries: JournalEntry[] = [];
  createdJournalEntry: CreateJournalEntry = {
    title: 'Deadlifts',
    category: 'Fitness',
    journalEntry: 'i just went to the fitness and made three deadlifts',
    blog: false,
  };

  constructor(
    private journalService: JournalService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService
      .login$()
      .subscribe((login) => console.log('can i login', login));

    // this.journalService
    //   .getAllByOwner$('35c62d76-8152-4626-8712-eeb96381bea8')
    //   .subscribe((journalEntries) => {
    //     console.log('entries by owner', journalEntries);
    //   });

    // this.journalService
    //   .getAllBlogs$()
    //   .subscribe((blogs) => console.log('blogs', blogs));

    // this.journalService
    //   .getOne$('ff436770-76c5-40e2-b231-77409eda7a61')
    //   .subscribe((journal) => console.log('get one journal', journal));

    // this.journalService
    //   .create$(this.createdJournalEntry)
    //   .subscribe((entry) => console.log(entry));
  }
}
