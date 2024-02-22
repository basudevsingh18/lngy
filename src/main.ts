import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule,{
  providers: [
    provideRouter(routes)
  ]
})
.catch(err => console.error(err));
