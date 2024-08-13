/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = environment.API_URL;
}

/**
 * Parameters for `ApiModule.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
}
