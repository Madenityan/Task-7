import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import {TablePageComponent} from './components/table-page/table-page.component';
import {ListPageComponent} from './components/list-page/list-page.component';
import {PostPageComponent} from './components/post-page/post-page.component';
import {RegistrationComponent} from './components/registration/registration.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'dashboard', component: DashboardPageComponent},
  { path: 'table', component: TablePageComponent},
  { path: 'list', component: ListPageComponent},
  { path: 'post', component: PostPageComponent},
  { path: 'register', component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
