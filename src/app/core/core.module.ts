import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ErrorComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {}
