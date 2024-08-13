/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RemoveProductResponse } from '../../models/remove-product-response';

export interface ApiV1ProductProductIdDelete$Plain$Params {
  productId: number;
}

export function apiV1ProductProductIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiV1ProductProductIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<RemoveProductResponse>> {
  const rb = new RequestBuilder(rootUrl, apiV1ProductProductIdDelete$Plain.PATH, 'delete');
  if (params) {
    rb.path('productId', params.productId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RemoveProductResponse>;
    })
  );
}

apiV1ProductProductIdDelete$Plain.PATH = '/api/v1/Product/{productId}';
