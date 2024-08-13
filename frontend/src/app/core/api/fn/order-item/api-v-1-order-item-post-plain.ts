/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AddOrderItemRequest } from '../../models/add-order-item-request';
import { AddOrderItemResponse } from '../../models/add-order-item-response';

export interface ApiV1OrderItemPost$Plain$Params {
      body?: AddOrderItemRequest
}

export function apiV1OrderItemPost$Plain(http: HttpClient, rootUrl: string, params?: ApiV1OrderItemPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AddOrderItemResponse>> {
  const rb = new RequestBuilder(rootUrl, apiV1OrderItemPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AddOrderItemResponse>;
    })
  );
}

apiV1OrderItemPost$Plain.PATH = '/api/v1/OrderItem';
