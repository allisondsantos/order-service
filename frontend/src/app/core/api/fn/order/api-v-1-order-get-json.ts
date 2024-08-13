/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetAllOrdersResponse } from '../../models/get-all-orders-response';

export interface ApiV1OrderGet$Json$Params {
  Id?: number;
  CustomerName?: string;
}

export function apiV1OrderGet$Json(http: HttpClient, rootUrl: string, params?: ApiV1OrderGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetAllOrdersResponse>>> {
  const rb = new RequestBuilder(rootUrl, apiV1OrderGet$Json.PATH, 'get');
  if (params) {
    rb.query('Id', params.Id, {});
    rb.query('CustomerName', params.CustomerName, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<GetAllOrdersResponse>>;
    })
  );
}

apiV1OrderGet$Json.PATH = '/api/v1/Order';
