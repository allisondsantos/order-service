/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetProductResponse } from '../../models/get-product-response';

export interface ApiV1ProductProductIdGet$Plain$Params {
  productId: number;
}

export function apiV1ProductProductIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiV1ProductProductIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetProductResponse>> {
  const rb = new RequestBuilder(rootUrl, apiV1ProductProductIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('productId', params.productId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetProductResponse>;
    })
  );
}

apiV1ProductProductIdGet$Plain.PATH = '/api/v1/Product/{productId}';
