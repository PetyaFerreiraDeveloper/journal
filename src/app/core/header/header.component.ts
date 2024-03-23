import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  mobileNav = false;
  constructor(public userService: UserService) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get email(): string {
    return this.userService.user?.email || '';
  }

  showMobileNav():void {
    console.log('clicked');
    
    this.mobileNav = !this.mobileNav;
  }
}
