import { provideRouter, RouterConfig } from '@angular/router';

import { TriangleComponent } from './triangle/triangle.component';
import { WelcomeComponent } from './home/welcome.component';

const routes: RouterConfig = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'triangle', component: TriangleComponent },
  { path: '**', component: WelcomeComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];