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
    const entryId =
      this.route.snapshot.params['journalId'] ||
      this.route.snapshot.params['blogId'];

    this.journalService.getOne$(entryId).subscribe((data) => {
      
      this.ownerId = data._ownerId;
      console.log('ownerId', this.ownerId);
      
      // if (this.loggedUserId == this.ownerId) {
      //   this.showEditButtons = true;
      // }
      // console.log(this.showEditButtons);
    });

    this.userService.login$().subscribe((data: AuthUser) => {
      
      this.user = data;
      this.loggedUserId = data._id;
      console.log('loggedUserid', this.loggedUserId);
      
    });

    
  }


  backHandler():void {
    this.location.back();
  }
}
