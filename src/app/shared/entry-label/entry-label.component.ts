import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-entry-label',
  templateUrl: './entry-label.component.html',
  styleUrls: ['./entry-label.component.css'],
})
export class EntryLabelComponent {
  @Input() label: boolean = true;
}
