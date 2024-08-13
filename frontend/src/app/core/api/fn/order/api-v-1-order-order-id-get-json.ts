/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetOrderResponse } from '../../models/get-order-response';

export interface ApiV1OrderOrderIdGet$Json$Params {
  orderId: number;
}

export function apiV1OrderOrderIdGet$Json(http: HttpClient, rootUrl: string, params: ApiV1OrderOrderIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GetOrderResponse>> {
  const rb = new RequestBuilder(rootUrl, apiV1OrderOrderIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('orderId', params.orderId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetOrderResponse>;
    })
  );
}

apiV1OrderOrderIdGet$Json.PATH = '/api/v1/Order/{orderId}';
