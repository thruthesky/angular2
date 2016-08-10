import { provideRouter, RouterConfig } from '@angular/router';
import {AboutComponent} from './about.component';
import {HomeComponent} from './home.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];