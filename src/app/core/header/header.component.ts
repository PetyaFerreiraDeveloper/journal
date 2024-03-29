import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  mobileNav = false;
  @Output() toggleMobileNavEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(public userService: UserService) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get email(): string {
    return this.userService.user?.email || '';
  }

  toggleMobileNav(): void {
    this.toggleMobileNavEvent.emit();
  }
}
