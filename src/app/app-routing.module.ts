import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';

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
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
