/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RemoveOrderResponse } from '../../models/remove-order-response';

export interface ApiV1OrderOrderIdDelete$Plain$Params {
  orderId: number;
}

export function apiV1OrderOrderIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiV1OrderOrderIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<RemoveOrderResponse>> {
  const rb = new RequestBuilder(rootUrl, apiV1OrderOrderIdDelete$Plain.PATH, 'delete');
  if (params) {
    rb.path('orderId', params.orderId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RemoveOrderResponse>;
    })
  );
}

apiV1OrderOrderIdDelete$Plain.PATH = '/api/v1/Order/{orderId}';
