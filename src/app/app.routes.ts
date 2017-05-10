import {Routes} from '@angular/router';
import {SecurityService} from "./services/security.service";
import {IndexComponent} from "./pages/index/index.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {LoginComponent} from "./pages/login/login.component";
import {FirstComponent} from './pages/first/first.component';
import {TwoComponent} from "./pages/two/two.component";
import {ThreeComponent} from "./pages/three/three.component";
import {FourComponent} from "./pages/four/four.component";
import {FiveComponent} from "./pages/five/five.component";
import {SixComponent} from "./pages/six/six.component";
import {SevenComponent} from "./pages/seven/seven.component";

const indexChildRoutes: Routes = [
  {
    path: "one",
    component: FirstComponent
  },
  {
    path: "two",
    component: TwoComponent
  },
  {
    path: "three",
    component: ThreeComponent
  },
  {
    path: "four",
    component: FourComponent
  },
  {
    path: "five",
    component: FiveComponent
  },
  {
    path: "six",
    component: SixComponent
  },
  {
    path: "seven",
    component: SevenComponent
  },
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
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
