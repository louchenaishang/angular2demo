import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {routes} from './app.routes';

import {CookieService} from 'angular2-cookie/services/cookies.service';
import {HttpService} from './http/http.service';
import {SecurityService} from './security/security.service';
import {LoginService} from "./login/login.service";

import {FirstComponentComponent} from './first-component/first-component.component';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    IndexComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [CookieService, HttpService, SecurityService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
