// import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LogInComponent } from './logIn/logIn.component';
import { SignUpComponent } from './signUp/signUp.component';
import { WelcomePageComponent } from './welcomePage/welcomePage.component';


export const routes: Routes = [
  {
  path:'',
  component:LogInComponent
  },

  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:"welcome",
    component:WelcomePageComponent
  }

];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
