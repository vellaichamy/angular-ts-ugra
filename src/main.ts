import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './10/app/app.module';
// import { AppModule } from './09/app/app.module';
// import { AppModule } from './08/app/app.module';
// import { AppModule } from './07/app/app.module';
// import { AppModule } from './06/app/app.module';
// import { AppModule } from './05/app/app.module';

// import { AppModule } from './02/app/app.module';
// import { AppModule } from './01/app/app.module';
// import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch(err => console.error(err));
