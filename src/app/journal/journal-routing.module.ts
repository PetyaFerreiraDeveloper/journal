import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { JournalListComponent } from './journal-list/journal-list.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { DetailsComponent } from './details/details.component';

const routes: Route[] = [
  {
    path: 'my-journal',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: JournalListComponent,
      },
      {
        path: ':journalId',
        component: DetailsComponent,
      },
    ],
  },
  {
    path: 'blog',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: BlogListComponent,
      },
      {
        path: ':blogId',
        component: DetailsComponent,
      },
    ],
  },
  { path: 'create-entry', component: CreateEntryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalRoutingModule {}
