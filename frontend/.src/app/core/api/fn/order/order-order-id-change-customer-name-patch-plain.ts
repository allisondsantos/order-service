/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ChangeCustomerNameResponse } from '../../models/change-customer-name-response';

export interface OrderOrderIdChangeCustomerNamePatch$Plain$Params {
  orderId: number;
      body?: string
}

export function orderOrderIdChangeCustomerNamePatch$Plain(http: HttpClient, rootUrl: string, params: OrderOrderIdChangeCustomerNamePatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ChangeCustomerNameResponse>> {
  const rb = new RequestBuilder(rootUrl, orderOrderIdChangeCustomerNamePatch$Plain.PATH, 'patch');
  if (params) {
    rb.path('orderId', params.orderId, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ChangeCustomerNameResponse>;
    })
  );
}

orderOrderIdChangeCustomerNamePatch$Plain.PATH = '/Order/{orderId}/ChangeCustomerName';
