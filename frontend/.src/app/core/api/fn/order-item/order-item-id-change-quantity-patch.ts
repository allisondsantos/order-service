/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface OrderItemIdChangeQuantityPatch$Params {
  orderItemId: number;
      body?: number
}

export function orderItemIdChangeQuantityPatch(http: HttpClient, rootUrl: string, params: OrderItemIdChangeQuantityPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, orderItemIdChangeQuantityPatch.PATH, 'patch');
  if (params) {
    rb.path('orderItemId', params.orderItemId, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

orderItemIdChangeQuantityPatch.PATH = '/{orderItemId}/ChangeQuantity';
