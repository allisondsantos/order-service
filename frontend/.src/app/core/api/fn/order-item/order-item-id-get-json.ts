/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetOrderItemResponse } from '../../models/get-order-item-response';

export interface OrderItemIdGet$Json$Params {
  orderItemId: number;
}

export function orderItemIdGet$Json(http: HttpClient, rootUrl: string, params: OrderItemIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GetOrderItemResponse>> {
  const rb = new RequestBuilder(rootUrl, orderItemIdGet$Json.PATH, 'get');
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

orderItemIdGet$Json.PATH = '/{orderItemId}';
