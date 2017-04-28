import { Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import { FirstComponentComponent } from './first-component/first-component.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'first',
    component: FirstComponentComponent
  }
];
