import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'journal';
  mobileNav = false;

  toggleMobileNav(): void {
    this.mobileNav = !this.mobileNav;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    if (
      !targetElement.closest('app-mobile-nav') &&
      !targetElement.closest('header')
    ) {
      console.log('click');
      console.log('Mobile Nav Status:', this.mobileNav);
      this.mobileNav = false;
      console.log('Mobile Nav Status After Closing:', this.mobileNav);
    }
  }
}
