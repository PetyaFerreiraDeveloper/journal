import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalService } from 'src/app/services/journal.service';
import { UserService } from 'src/app/services/user.service';
import { JournalEntry } from 'src/app/types/journal';
import { AuthUser } from 'src/app/types/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  currentEntry: JournalEntry = {} as JournalEntry;
  isLoading: boolean = true;

  user: AuthUser = {} as AuthUser;
  showEditButtons: boolean = false;
  ownerId: string = '';
  loggedUserId: string = '';

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private userService: UserService,
    private journalService: JournalService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      const entryId = data['journalId'] || data['blogId'];

      this.journalService.getOne$(entryId).subscribe((entry) => {
        this.currentEntry = entry;
        this.isLoading = false;
        this.ownerId = entry._ownerId;
      });
    });

    this.userService.login$().subscribe((data: AuthUser) => {
      this.user = data;
      this.loggedUserId = data._id;
    });
  }

  backHandler(): void {
    this.location.back();
  }
}
