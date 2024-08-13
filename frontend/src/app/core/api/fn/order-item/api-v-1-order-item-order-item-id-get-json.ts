/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetOrderItemResponse } from '../../models/get-order-item-response';

export interface ApiV1OrderItemOrderItemIdGet$Json$Params {
  orderItemId: number;
}

export function apiV1OrderItemOrderItemIdGet$Json(http: HttpClient, rootUrl: string, params: ApiV1OrderItemOrderItemIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GetOrderItemResponse>> {
  const rb = new RequestBuilder(rootUrl, apiV1OrderItemOrderItemIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('orderItemId', params.orderItemId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetOrderItemResponse>;
    })
  );
}

apiV1OrderItemOrderItemIdGet$Json.PATH = '/api/v1/OrderItem/{orderItemId}';
