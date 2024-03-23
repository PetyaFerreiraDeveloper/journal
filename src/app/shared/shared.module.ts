import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { EntryLabelComponent } from './entry-label/entry-label.component';
import { NoEntriesComponent } from './no-entries/no-entries.component';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';

@NgModule({
  declarations: [
    LoaderComponent,
    EntryLabelComponent,
    NoEntriesComponent,
    EmailDirective,
    SlicePipe,
    ConfirmModalComponent,
    MobileNavComponent,
  ],
  imports: [CommonModule],
  exports: [
    LoaderComponent,
    EntryLabelComponent,
    NoEntriesComponent,
    EmailDirective,
    SlicePipe,
    ConfirmModalComponent,
    MobileNavComponent
  ],
})
export class SharedModule {}
