/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetOrderItemResponse } from '../../models/get-order-item-response';

export interface OrderItemIdGet$Plain$Params {
  orderItemId: number;
}

export function orderItemIdGet$Plain(http: HttpClient, rootUrl: string, params: OrderItemIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetOrderItemResponse>> {
  const rb = new RequestBuilder(rootUrl, orderItemIdGet$Plain.PATH, 'get');
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

orderItemIdGet$Plain.PATH = '/{orderItemId}';
