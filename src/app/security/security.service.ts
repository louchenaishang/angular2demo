import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "../login/login.service";

@Injectable()
export class SecurityService implements CanActivate {

  canActivate(nextRoute: ActivatedRouteSnapshot, nextState: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    let nextUrl = nextState.url;
    let currentUrl = this.router.url;
    //alert(nextUrl);
    //alert(currentUrl);

    if(nextUrl === '/login'){
      if(this.loginService.isLogined()){
        this.router.navigate(['']);
      }
      return true;
    }else{
      if (!this.loginService.isLogined()) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    }

  }

  constructor(private currentRoute: ActivatedRoute,
              private router: Router,
              private loginService: LoginService) {
  }


}
