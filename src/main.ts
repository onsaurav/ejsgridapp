import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { registerLicense } from '@syncfusion/ej2-base';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhAYVB2WmFZfVpgd19GYlZURmYuP1ZhSXxXdk1gWH9dcHZQRGlUUkc=');

import { BooklistComponent } from '../src/app/booklist/booklist.component';

bootstrapApplication(BooklistComponent)
  .catch(err => console.error(err));

