/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ChangeCustomerNameResponse } from '../../models/change-customer-name-response';

export interface ApiV1OrderOrderIdChangeCustomerEmailPatch$Json$Params {
  orderId: number;
      body?: string
}

export function apiV1OrderOrderIdChangeCustomerEmailPatch$Json(http: HttpClient, rootUrl: string, params: ApiV1OrderOrderIdChangeCustomerEmailPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ChangeCustomerNameResponse>> {
  const rb = new RequestBuilder(rootUrl, apiV1OrderOrderIdChangeCustomerEmailPatch$Json.PATH, 'patch');
  if (params) {
    rb.path('orderId', params.orderId, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ChangeCustomerNameResponse>;
    })
  );
}

apiV1OrderOrderIdChangeCustomerEmailPatch$Json.PATH = '/api/v1/Order/{orderId}/ChangeCustomerEmail';
