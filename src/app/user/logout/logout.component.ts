import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private location: Location
  ) {}

  logoutHandler(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }

  backHandler(): void {
    this.location.back();
  }
}
