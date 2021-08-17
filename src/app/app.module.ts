import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignUpComponent } from './signUp/signUp.component';

import { routes } from './app-routing.module';
import { LogInComponent } from './logIn/logIn.component';
import { WelcomePageComponent } from './welcomePage/welcomePage.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    WelcomePageComponent
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
