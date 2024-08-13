/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetOrderItemResponse } from '../../models/get-order-item-response';

export interface ApiV1OrderItemOrderItemIdGet$Plain$Params {
  orderItemId: number;
}

export function apiV1OrderItemOrderItemIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiV1OrderItemOrderItemIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetOrderItemResponse>> {
  const rb = new RequestBuilder(rootUrl, apiV1OrderItemOrderItemIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('orderItemId', params.orderItemId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetOrderItemResponse>;
    })
  );
}

apiV1OrderItemOrderItemIdGet$Plain.PATH = '/api/v1/OrderItem/{orderItemId}';
