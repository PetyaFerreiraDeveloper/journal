import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalListComponent } from './journal-list/journal-list.component';
import { JournalEntryComponent } from './journal-entry/journal-entry.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [JournalListComponent, JournalEntryComponent],
  imports: [CommonModule, SharedModule],
  exports: [JournalListComponent, JournalEntryComponent],
})
export class JournalModule {}
