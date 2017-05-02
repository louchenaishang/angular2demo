import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: []
})
export class IndexComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

}
