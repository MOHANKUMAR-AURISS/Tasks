// import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { LogInComponent } from './logIn/logIn.component';
import { ParentComponent } from './parent/parent.component';
import { SignUpComponent } from './signUp/signUp.component';
import { UserDetailComponent } from './userDetail/userDetails.component';
import { UserNameComponent } from './userName/userName.component';
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
    canActivate:[AuthenticationGuard],
    component:WelcomePageComponent
  },
  {

    path:'username',
    component:UserNameComponent
  },
  {
    path:'userdetail',
    component:UserDetailComponent
  },
  {
    path:'userdetail/:id',
    component:UserDetailComponent
  },
  {
    path:'parent',
    component:ParentComponent
  }

];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
