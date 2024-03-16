import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalService } from 'src/app/services/journal.service';
import { UserService } from 'src/app/services/user.service';
import { JournalEntry } from 'src/app/types/journal';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  showEditButtons: boolean = false;
  ownerId: string = '';

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private userService: UserService,
    private journalService: JournalService
  ) {}

  get loggedUserId() {
    return this.userService.user?._id;
  }

  ngOnInit(): void {
    const entryId =
      this.route.snapshot.params['journalId'] ||
      this.route.snapshot.params['blogId'];

    this.journalService.getOne$(entryId).subscribe((data) => {
      this.ownerId = data._ownerId;
      if (this.userService.user?._id == this.ownerId) {
        this.showEditButtons = true;
      }
    });
  }

  backHandler() {
    this.location.back();
  }
}
