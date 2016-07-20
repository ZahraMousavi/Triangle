import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { appRouterProviders } from './app.routes';

// Our main component
import { AppComponent } from './app.component';

bootstrap(AppComponent, [
  appRouterProviders
]);