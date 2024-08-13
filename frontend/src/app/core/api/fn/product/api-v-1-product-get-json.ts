/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetAllProductsResponse } from '../../models/get-all-products-response';

export interface ApiV1ProductGet$Json$Params {
  Id?: number;
  Name?: string;
}

export function apiV1ProductGet$Json(http: HttpClient, rootUrl: string, params?: ApiV1ProductGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetAllProductsResponse>>> {
  const rb = new RequestBuilder(rootUrl, apiV1ProductGet$Json.PATH, 'get');
  if (params) {
    rb.query('Id', params.Id, {});
    rb.query('Name', params.Name, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<GetAllProductsResponse>>;
    })
  );
}

apiV1ProductGet$Json.PATH = '/api/v1/Product';
