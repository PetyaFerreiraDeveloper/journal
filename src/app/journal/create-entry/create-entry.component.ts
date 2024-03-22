import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JournalService } from 'src/app/services/journal.service';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css'],
})
export class CreateEntryComponent {
  @ViewChild('blogCheckbox') blogCheckbox: any;
  blogChecked: boolean = false;

  isChecked() {
    this.blogChecked = this.blogCheckbox.control.value;
  }

  constructor(
    private journalService: JournalService,
    private location: Location,
    private router: Router,
  ) {}

  backHandler(event: Event): void {
    event.preventDefault();
    this.location.back();
  }

  addEntry(form: NgForm) {
    if (form.invalid) return;

    const journalEntry = form.value;
    this.journalService.create$(journalEntry).subscribe(() => {
      this.router.navigate(['/my-journal']);
    });
  }
}
