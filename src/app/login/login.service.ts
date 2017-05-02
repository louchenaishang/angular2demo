import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service'
import 'rxjs/add/operator/toPromise';


import {Login} from "./login.model";

@Injectable()
export class LoginService {

  constructor(private httpService: HttpService) {
  }

  public login(): Promise<Login[]> {
    return this.httpService.get('/assets/mock/login-list.json')
      .toPromise()
      .then(response => response.json() as Login[])
      .catch(this.handleError);
  }

  public isLogined():boolean{
    let user = sessionStorage.getItem('user');
    return user?true:false;
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
