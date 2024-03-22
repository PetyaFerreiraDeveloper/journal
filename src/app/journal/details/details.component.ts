import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JournalService } from 'src/app/services/journal.service';
import { UserService } from 'src/app/services/user.service';
import { JournalEntry } from 'src/app/types/journal';
import { LoginAuthUser } from 'src/app/types/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  currentEntry: JournalEntry = {} as JournalEntry;
  isLoading: boolean = true;

  user: LoginAuthUser = {} as LoginAuthUser;
  showEditButtons: boolean = false;
  ownerId: string = '';
  loggedUserId: string = '';

  get loggedUser(): LoginAuthUser | undefined {
    return this.userService.user;
  }

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private userService: UserService,
    private journalService: JournalService,
    private router: Router
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

    if (this.loggedUser) {
      this.user = this.loggedUser;
      this.loggedUserId = this.loggedUser._id;
    }
  }

  backHandler(): void {
    this.location.back();
  }

  deleteEntryHandler(): void {
    this.journalService.delete$(this.currentEntry._id).subscribe(() => {
      if (this.currentEntry.blog) {
        this.router.navigate(['/blog']);
      } else {
        this.router.navigate(['/my-journal']);
      }
    });
  }
}
