import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from './http.service'
import 'rxjs/add/operator/toPromise';


import {Login} from "../models/login.model";


@Injectable()
export class LoginService {

  constructor(private httpService: HttpService, private router: Router) {
  }

  public login(): Promise<Login[]> {
    return this.httpService.get('/assets/mock/login-list.json')
      .toPromise()
      .then(response => response.json() as Login[])
      .catch(this.handleError);
  }

  public logout(): void {
    sessionStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  public isLogined(): boolean {
    let user = sessionStorage.getItem('user');
    return user ? true : false;
  }

  public setCurrentUser(login: Login): void {
    if (login != null) {
      sessionStorage.setItem('user', JSON.stringify(login));
    }
  }

  public getCurrentUser(): Login {
    let user = sessionStorage.getItem('user');
    if (user != null) {
      return JSON.parse(user);
    } else {
      return null;
    }
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
