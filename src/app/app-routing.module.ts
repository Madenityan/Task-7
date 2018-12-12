import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'dashboard', component: DashboardPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
