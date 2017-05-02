import {Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {LoginComponent} from "./login/login.component";
import {FirstComponentComponent} from './first-component/first-component.component';
import {SecurityService} from "./security/security.service";

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [SecurityService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [SecurityService]
  },
  {
    path: 'first',
    component: FirstComponentComponent,
    canActivate: [SecurityService]
  }
];
