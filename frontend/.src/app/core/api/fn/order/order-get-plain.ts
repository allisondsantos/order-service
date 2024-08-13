/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateOrderResponse } from '../../models/create-order-response';

export interface OrderGet$Plain$Params {
  Id?: number;
  CustomerName?: string;
}

export function orderGet$Plain(http: HttpClient, rootUrl: string, params?: OrderGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateOrderResponse>> {
  const rb = new RequestBuilder(rootUrl, orderGet$Plain.PATH, 'get');
  if (params) {
    rb.query('Id', params.Id, {});
    rb.query('CustomerName', params.CustomerName, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreateOrderResponse>;
    })
  );
}

orderGet$Plain.PATH = '/Order';
