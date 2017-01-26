import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.router';

import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { masterFirebaseConfig } from './api-key';
import { AngularFireModule } from 'angularfire2';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditAmountFundedComponent } from './edit-amount-funded/edit-amount-funded.component';
import { FundedBarComponent } from './funded-bar/funded-bar.component';
import { AdminComponent } from './admin/admin.component';
import { RegionPipe } from './region.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    ProjectComponent,
    ProjectDetailComponent,
    AddProjectComponent,
    EditAmountFundedComponent,
    FundedBarComponent,
    AdminComponent,
    RegionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
