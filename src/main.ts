import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

import { BooklistComponent } from '../src/app/booklist/booklist.component';

bootstrapApplication(BooklistComponent)
  .catch(err => console.error(err));

