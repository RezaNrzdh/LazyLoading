import {ApplicationConfig} from '@angular/core';
import {provideRouter, withPreloading} from '@angular/router';

import { routes } from './app.routes';
import {PreloadingStrategyService} from "./services/preloading-strategy.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withPreloading(PreloadingStrategyService))]
};
