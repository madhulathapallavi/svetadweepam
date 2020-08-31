import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginInComponent } from './login-in/login-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { UserformComponent } from './userform/userform.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { UsersdetailsComponent } from './usersdetails/usersdetails.component';
import { DataService } from './dataservice';
import { ConfirmedValidator } from './userform/confirmed.validator'

@NgModule({
  declarations: [
    AppComponent,
    LoginInComponent,
    SignUpComponent,
    DashboardComponent,
    NavbarComponent,
    ProfileComponent,
    UserformComponent,
    SubscribeComponent,
    UsersdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
