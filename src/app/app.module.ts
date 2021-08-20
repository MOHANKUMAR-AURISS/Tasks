import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
import { CheckBoxComponent } from './checkBox/checkBox.component';
import { CrudComponent } from './crud/crud.component';
import { UpdateComponent } from './crud/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    WelcomePageComponent,
    UserNameComponent,
    UserDetailComponent,
    ParentComponent,
    ChildComponent,
    CheckBoxComponent,
    CrudComponent,
    UpdateComponent
  ],

  imports: [
    RouterModule.forRoot(routes,{useHash:true}),
    BrowserModule,
    // AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
