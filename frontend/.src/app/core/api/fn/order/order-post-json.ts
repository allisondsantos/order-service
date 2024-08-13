/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateOrderRequest } from '../../models/create-order-request';
import { CreateOrderResponse } from '../../models/create-order-response';

export interface OrderPost$Json$Params {
      body?: CreateOrderRequest
}

export function orderPost$Json(http: HttpClient, rootUrl: string, params?: OrderPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateOrderResponse>> {
  const rb = new RequestBuilder(rootUrl, orderPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreateOrderResponse>;
    })
  );
}

orderPost$Json.PATH = '/Order';
