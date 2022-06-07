import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { RoutingTestComponent } from './app/components/routing-test/routing-test.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const APP_ROUTES: Routes = [
  {
    component: RoutingTestComponent,
    path: "test"
  },
  {
    component: HomeComponent,
    path: ""
  }
]

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(APP_ROUTES))
  ]
});