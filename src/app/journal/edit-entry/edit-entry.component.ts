import { Component, OnInit, ViewChild } from '@angular/core';
import { JournalService } from 'src/app/services/journal.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { JournalEntry } from 'src/app/types/journal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css'],
})
export class EditEntryComponent implements OnInit {
  @ViewChild('blogCheckbox') blogCheckbox: any;
  currentEntry: JournalEntry = {} as JournalEntry;

  // blogChecked: boolean = this.blogCheckbox.control.value

  isChecked() {
    console.log(this.form.value.blog);
  }

  entryDetails: { title: string; category: string } = {
    title: 'new title',
    category: 'fun functions',
  };

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private journalService: JournalService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    const { title, category, blog, authorName, journalEntry } =
      this.currentEntry;

    this.createForm({
      ...this.currentEntry,
    });
  }

  createForm(formValue: JournalEntry) {
    this.form = this.fb.group({
      title: [formValue.title, [Validators.required]],
      category: [formValue.category],
      blog: [formValue.blog],
      authorName: [formValue.authorName],
      journalEntry: [formValue.journalEntry],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      console.log('dtaø', data);

      const entryId = data['journalId'] || data['blogId'];
      this.journalService
        .getOne$(entryId)
        .subscribe((entry) => {
          this.createForm({
            ...entry,
          });
        });
    });
  }

  backHandler(event: Event): void {
    event.preventDefault();
    this.location.back();
  }

  saveEntryHandler(): void {
    // if (this.form.invalid) return;
    console.log(this.form.value);

    this.entryDetails = this.form.value as { title: string; category: string };
  }
}
