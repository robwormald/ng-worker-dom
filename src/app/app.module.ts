import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, Injector, ComponentFactoryResolver } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private injector:Injector) {}
  // auto bootstrap doesn't work - document.querySelector not supported :(
  ngDoBootstrap(appRef:ApplicationRef) {
    const cfr: ComponentFactoryResolver = this.injector.get(ComponentFactoryResolver);
    const appComponentFactory = cfr.resolveComponentFactory(AppComponent);

    // HACK! see https://github.com/ampproject/worker-dom/issues/10
    setTimeout(() => {
      const rootElement = document.createElement('app-root');
      document.body.appendChild(rootElement);
      setTimeout(() => {
        const componentRef = appRef.bootstrap(appComponentFactory, rootElement);
        appRef.tick();
      });

    }, 0);
  }
}
