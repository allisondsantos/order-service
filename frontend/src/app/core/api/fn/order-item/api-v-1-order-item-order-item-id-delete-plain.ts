/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RemoveOrderItemResponse } from '../../models/remove-order-item-response';

export interface ApiV1OrderItemOrderItemIdDelete$Plain$Params {
  orderItemId: number;
}

export function apiV1OrderItemOrderItemIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiV1OrderItemOrderItemIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<RemoveOrderItemResponse>> {
  const rb = new RequestBuilder(rootUrl, apiV1OrderItemOrderItemIdDelete$Plain.PATH, 'delete');
  if (params) {
    rb.path('orderItemId', params.orderItemId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RemoveOrderItemResponse>;
    })
  );
}

apiV1OrderItemOrderItemIdDelete$Plain.PATH = '/api/v1/OrderItem/{orderItemId}';
