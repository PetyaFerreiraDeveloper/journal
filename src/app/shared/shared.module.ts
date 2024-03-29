import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { EntryLabelComponent } from './entry-label/entry-label.component';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    LoaderComponent,
    EntryLabelComponent,
    EmailDirective,
    SlicePipe,
    ConfirmModalComponent,
  ],
  imports: [CommonModule],
  exports: [
    LoaderComponent,
    EntryLabelComponent,
    EmailDirective,
    SlicePipe,
    ConfirmModalComponent,
  ],
})
export class SharedModule {}
