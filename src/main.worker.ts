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
  importScripts('http://localhost:4200/zone.js');
  platformBrowserDynamic().bootstrapModule(AppModule)
    .then(moduleRef => {
      console.log(moduleRef);
    })
    .catch(err => console.log(err));
}


