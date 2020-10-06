import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
import { ConfirmedValidator } from './userform/confirmed.validator';

import { AuthService } from './shared/auth/auth.service';
import { HttpService} from './shared/services/http.service';
import { MagazineUploaderComponent } from './magazine-uploader/magazine-uploader.component';


import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
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
    UsersdetailsComponent,
    MagazineUploaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
  }),
  NgSelectModule,
  NgbModule,
    

  ],
  providers: [
    DataService,
    AuthService,
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
