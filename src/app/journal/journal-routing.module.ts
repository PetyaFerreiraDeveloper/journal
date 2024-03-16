import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { JournalListComponent } from './journal-list/journal-list.component';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Route[] = [
  {
    path: 'my-journal',
    component: JournalListComponent,
  },
  {
    path: 'blog',
    component: BlogListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalRoutingModule {}
