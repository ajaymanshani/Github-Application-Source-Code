import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from './services/auth.service';
import { SearchService } from './services/search.service';
import { AuthGuard } from './services/auth-guard.service';
import { SearchDashboardComponent } from './search-dashboard/search-dashboard.component';
import { UserDataSharedService } from './services/user-data.shared.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FollowerViewComponent } from './follower-view/follower-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SearchDashboardComponent,
    FollowerViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
  ],
  providers: [AuthGuard, UserDataSharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
