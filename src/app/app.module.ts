import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Angular2FontAwesomeModule} from 'angular2-font-awesome/angular2-font-awesome';

import {AppComponent} from './app.component';
import {routes} from './app.routes';

import {CookieService} from 'angular2-cookie/services/cookies.service';
import {HttpService} from './services/http.service';
import {SecurityService} from './services/security.service';
import {LoginService} from "./services/login.service";

import {FirstComponent} from './pages/first/first.component';
import {IndexComponent} from './pages/index/index.component';
import {LoginComponent} from './pages/login/login.component';
import { TwoComponent } from './pages/two/two.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ThreeComponent } from './pages/three/three.component';
import { FourComponent } from './pages/four/four.component';
import { FiveComponent } from './pages/five/five.component';
import { SixComponent } from './pages/six/six.component';
import { SevenComponent } from './pages/seven/seven.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    IndexComponent,
    LoginComponent,
    TwoComponent,
    PageNotFoundComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    SevenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    Angular2FontAwesomeModule
  ],
  providers: [CookieService, HttpService, SecurityService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
