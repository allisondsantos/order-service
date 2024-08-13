/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AddOrderItemRequest } from '../../models/add-order-item-request';
import { AddOrderItemResponse } from '../../models/add-order-item-response';

export interface ApiV1OrderItemPost$Json$Params {
      body?: AddOrderItemRequest
}

export function apiV1OrderItemPost$Json(http: HttpClient, rootUrl: string, params?: ApiV1OrderItemPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AddOrderItemResponse>> {
  const rb = new RequestBuilder(rootUrl, apiV1OrderItemPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AddOrderItemResponse>;
    })
  );
}

apiV1OrderItemPost$Json.PATH = '/api/v1/OrderItem';
