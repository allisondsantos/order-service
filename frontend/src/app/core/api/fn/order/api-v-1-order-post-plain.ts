/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateOrderRequest } from '../../models/create-order-request';
import { CreateOrderResponse } from '../../models/create-order-response';

export interface ApiV1OrderPost$Plain$Params {
      body?: CreateOrderRequest
}

export function apiV1OrderPost$Plain(http: HttpClient, rootUrl: string, params?: ApiV1OrderPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateOrderResponse>> {
  const rb = new RequestBuilder(rootUrl, apiV1OrderPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreateOrderResponse>;
    })
  );
}

apiV1OrderPost$Plain.PATH = '/api/v1/Order';
