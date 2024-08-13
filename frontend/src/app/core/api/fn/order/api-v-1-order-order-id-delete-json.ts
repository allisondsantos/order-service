/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RemoveOrderResponse } from '../../models/remove-order-response';

export interface ApiV1OrderOrderIdDelete$Json$Params {
  orderId: number;
}

export function apiV1OrderOrderIdDelete$Json(http: HttpClient, rootUrl: string, params: ApiV1OrderOrderIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<RemoveOrderResponse>> {
  const rb = new RequestBuilder(rootUrl, apiV1OrderOrderIdDelete$Json.PATH, 'delete');
  if (params) {
    rb.path('orderId', params.orderId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RemoveOrderResponse>;
    })
  );
}

apiV1OrderOrderIdDelete$Json.PATH = '/api/v1/Order/{orderId}';
