import {Routes} from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {LoginComponent} from "./pages/login/login.component";
import {FirstComponentComponent} from './pages/first/first.component';
import {SecurityService} from "./services/security.service";

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
