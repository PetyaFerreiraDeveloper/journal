import { Component, Input } from '@angular/core';
import { JournalEntry } from 'src/app/types/journal';

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css'],
})
export class EntryDetailsComponent {
  @Input() currentEntry!: JournalEntry;
}
