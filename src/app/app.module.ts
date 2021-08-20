import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignUpComponent } from './signUp/signUp.component';

import { routes } from './app-routing.module';
import { LogInComponent } from './logIn/logIn.component';
import { WelcomePageComponent } from './welcomePage/welcomePage.component';
import { UserNameComponent } from './userName/userName.component';
import { UserDetailComponent } from './userDetail/userDetails.component';
import { AppService } from './app.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    WelcomePageComponent,
    UserNameComponent,
    UserDetailComponent,
    ParentComponent,
    ChildComponent
    
  ],

  imports: [
    RouterModule.forRoot(routes,{useHash:true}),
    BrowserModule,
    // AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
