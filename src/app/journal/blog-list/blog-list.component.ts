import { Component, OnInit } from '@angular/core';
import { JournalService } from 'src/app/services/journal.service';
import { JournalEntry } from 'src/app/types/journal';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  isLoading: boolean = true;
  blogEntries: JournalEntry[] = [];

  constructor(private journalService: JournalService) {}

  ngOnInit(): void {
    this.journalService.getAllBlogs$().subscribe({
      next: (blogs) => {
        console.log(blogs);
        
        this.blogEntries = blogs;
        this.isLoading = false
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}