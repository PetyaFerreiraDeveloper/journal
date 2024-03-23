import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service';
import { JournalEntry } from '../../types/journal';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-journal-list',
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.css'],
})
export class JournalListComponent implements OnInit {
  journalEntries: JournalEntry[] = [];
  isLoading: boolean = true;
  constructor(
    private journalService: JournalService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const ownerId = this.userService.user?._id || '';
    this.journalService.getAllByOwner$(ownerId).subscribe({
      next: (journals) => {
        journals.sort((a, b) => {
          return b._createdOn - a._createdOn;
        });
        this.journalEntries = journals;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error: ', err);
      },
    });
  }
}
