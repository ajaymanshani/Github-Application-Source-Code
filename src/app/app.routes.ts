import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchDashboardComponent } from './search-dashboard/search-dashboard.component';
import { FollowerViewComponent } from './follower-view/follower-view.component'

import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: 'searchView',
    component: SearchDashboardComponent
  },
  {
    path: 'follower-view/:follower.login',
    component: FollowerViewComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutes {
}
