import { Component, HostListener, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'journal';
  mobileNav = false;

  constructor(private cdr: ChangeDetectorRef) {}

  toggleMobileNav(): void {
    this.mobileNav = !this.mobileNav;
    this.cdr.detectChanges();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    if (
      !targetElement.closest('app-mobile-nav') &&
      !targetElement.closest('header')
    ) {
      this.mobileNav = false;
    }
  }
}
