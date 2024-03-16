import { Component, Input } from '@angular/core';
import { JournalEntry } from '../../types/journal';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.css'],
})
export class JournalEntryComponent {
  // @Input() entry: JournalEntry | undefined;
  @Input('entry') entry = {} as JournalEntry;
}
