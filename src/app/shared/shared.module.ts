import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { EntryLabelComponent } from './entry-label/entry-label.component';
import { NoEntriesComponent } from './no-entries/no-entries.component';

@NgModule({
  declarations: [LoaderComponent, EntryLabelComponent, NoEntriesComponent],
  imports: [CommonModule],
  exports: [LoaderComponent, EntryLabelComponent, NoEntriesComponent],
})
export class SharedModule {}
