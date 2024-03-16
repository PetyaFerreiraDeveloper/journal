import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-entries',
  templateUrl: './no-entries.component.html',
  styleUrls: ['./no-entries.component.css'],
})
export class NoEntriesComponent {
  @Input() title!: string;
}
