import {Routes} from '@angular/router';
import {SecurityService} from "./services/security.service";
import {IndexComponent} from "./pages/index/index.component";
import {LoginComponent} from "./pages/login/login.component";
import {FirstComponent} from './pages/first/first.component';
import {TwoComponent} from "./pages/two/two.component";

const indexChildRoutes: Routes = [
  {
    path: "one",
    component: FirstComponent
  },
  {
    path: "two",
    component: TwoComponent
  }
];

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [SecurityService],
    children: indexChildRoutes
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [SecurityService]
  }
];
