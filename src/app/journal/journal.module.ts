import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalListComponent } from './journal-list/journal-list.component';
import { JournalEntryComponent } from './journal-entry/journal-entry.component';
import { SharedModule } from '../shared/shared.module';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { DetailsComponent } from './details/details.component';
import { JournalRoutingModule } from './journal-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    JournalListComponent,
    JournalEntryComponent,
    CreateEntryComponent,
    DetailsComponent,
    BlogListComponent,
    BlogEntryComponent,
    EntryDetailsComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule, JournalRoutingModule],
  exports: [JournalListComponent, JournalEntryComponent],
})
export class JournalModule {}
