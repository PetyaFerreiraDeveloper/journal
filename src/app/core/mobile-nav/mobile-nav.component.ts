import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css'],
})
export class MobileNavComponent {
  @Output() linkClicked: EventEmitter<void> = new EventEmitter<void>();
  constructor(private userService: UserService) {}
  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  get email(): string {
    return this.userService.user?.email || '';
  }

  onLinkClick(): void {
    this.linkClicked.emit();
  }
}
