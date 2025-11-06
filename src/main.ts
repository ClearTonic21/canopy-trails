import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './frontend/app/app.config';
import { App } from './frontend/app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
