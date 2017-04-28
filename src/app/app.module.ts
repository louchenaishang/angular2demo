import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {routes} from './app.routes';

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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
