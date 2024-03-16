import { Component, Input } from '@angular/core';
import { JournalEntry } from 'src/app/types/journal';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.css'],
})
export class BlogEntryComponent {
  @Input() entry!: JournalEntry;
}
