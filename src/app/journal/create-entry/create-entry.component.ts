import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    private location: Location
  ) {}

  backHandler(event: Event): void {
    event.preventDefault();
    this.location.back();
  }

  createHandler(
    event: Event,
    titleInput: string,
    categoryInput: string,
    blogChecked: boolean,
    journalEntry: string
  ): void {
    event.preventDefault();

    const entry = {
      title: titleInput,
      category: categoryInput,
      journalEntry: journalEntry,
      blog: blogChecked,
    };
    console.log(entry);

    this.journalService.create$(entry).subscribe((data) => console.log(data));
  }

  addEntry(form: NgForm) {
    if (form.invalid) return;
    console.log(form.value);
  }
}
