import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Login} from "./login.model";
import {LoginService} from "./login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  login: Login = new Login('', '');
  errorText: string = '';

  onSubmit() {
    this.loginService.login().then(items => {
      for (let item of items) {
        //console.log(item);
        if (this.login.username === item.username && this.login.password === item.password) {
          sessionStorage.setItem('user', JSON.stringify(item));
          break;
        }
      }

      let user = sessionStorage.getItem('user');
      if (user) {
        console.log('登录成功');
        this.errorText = '';
        this.router.navigate(['']);
      } else {
        this.errorText = 'username or password is invalid';
      }

    });
  }

}
