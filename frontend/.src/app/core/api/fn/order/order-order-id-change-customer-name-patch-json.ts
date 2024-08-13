/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ChangeCustomerNameResponse } from '../../models/change-customer-name-response';

export interface OrderOrderIdChangeCustomerNamePatch$Json$Params {
  orderId: number;
      body?: string
}

export function orderOrderIdChangeCustomerNamePatch$Json(http: HttpClient, rootUrl: string, params: OrderOrderIdChangeCustomerNamePatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ChangeCustomerNameResponse>> {
  const rb = new RequestBuilder(rootUrl, orderOrderIdChangeCustomerNamePatch$Json.PATH, 'patch');
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

orderOrderIdChangeCustomerNamePatch$Json.PATH = '/Order/{orderId}/ChangeCustomerName';
