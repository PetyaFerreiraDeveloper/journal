import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalService } from 'src/app/services/journal.service';
import { UserService } from 'src/app/services/user.service';
import { JournalEntry } from 'src/app/types/journal';

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css'],
})
export class EntryDetailsComponent implements OnInit {
  isLoading: boolean = true;
  entryId!: string;
  currentEntry: JournalEntry = {} as JournalEntry;

  constructor(
    private journalService: JournalService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.entryId =
      this.route.snapshot.params['journalId'] ||
      this.route.snapshot.params['blogId'];

    this.journalService.getOne$(this.entryId).subscribe((data) => {
      this.currentEntry = data;
      this.isLoading = false;
    });
  }

  get loggedUser() {
    return this.userService.user;
  }
}
