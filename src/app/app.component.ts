import {Component} from '@angular/core';
import {CookieService} from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _cookieService: CookieService) {
  }

  getCookie(key: string) {
    let value = this._cookieService.get(key)
    alert(value)
    return value
  }

  setCookie(key: string, value: string) {
    this._cookieService.put(key, value)
  }

}
