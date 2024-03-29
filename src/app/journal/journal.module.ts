import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalListComponent } from './journal-list/journal-list.component';
import { JournalEntryComponent } from './journal-entry/journal-entry.component';
import { SharedModule } from '../shared/shared.module';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { DetailsComponent } from './details/details.component';
import { JournalRoutingModule } from './journal-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { UserModule } from '../user/user.module';
import { NoEntriesComponent } from './no-entries/no-entries.component';

@NgModule({
  declarations: [
    JournalListComponent,
    JournalEntryComponent,
    CreateEntryComponent,
    DetailsComponent,
    BlogListComponent,
    EntryDetailsComponent,
    EditEntryComponent,
    NoEntriesComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    JournalRoutingModule,
    UserModule,
  ],
  exports: [JournalListComponent, JournalEntryComponent],
})
export class JournalModule {}
