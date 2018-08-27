import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare var importScripts;


if (environment.production) {
  enableProdMode();
}

load();

function load() {
  const zoneUrl = `https://ng-webworker-demo.firebaseapp.com/zone.js`;
  importScripts(zoneUrl);
  platformBrowserDynamic().bootstrapModule(AppModule)
   .catch(err => console.log(err));
}


