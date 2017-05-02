import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {routes} from './app.routes';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import {FirstComponentComponent} from './first-component/first-component.component';
import {IndexComponent} from './index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
