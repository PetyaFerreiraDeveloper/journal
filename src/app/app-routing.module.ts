import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/user/user.module').then((m) => m.UserModule),
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
