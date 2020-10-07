import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginInComponent } from './login-in/login-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { UserformComponent } from './userform/userform.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { UsersdetailsComponent } from './usersdetails/usersdetails.component';

import {MagazineUploaderComponent} from './magazine-uploader/magazine-uploader.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


const routes: Routes = [
  {path:'',component:LoginInComponent},
  {path:'login',component:LoginInComponent},
  {path:'dashboard',component:DashboardComponent},
  // {path:'signup',component:SignUpComponent},
  {path:'profile',component:ProfileComponent},
  {path:'userform',component:UserformComponent},
  {path:'subscription',component:SubscribeComponent},
  {path:'Usersdetails',component:UsersdetailsComponent},
  {path: 'upload', component: MagazineUploaderComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
