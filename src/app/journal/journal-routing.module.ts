import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { JournalListComponent } from './journal-list/journal-list.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Route[] = [
  {
    path: 'my-journal',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: JournalListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':journalId',
        component: DetailsComponent,
        canActivate: [AuthGuard],
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
  {
    path: 'create-entry',
    component: CreateEntryComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalRoutingModule {}
