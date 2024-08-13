/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ChangePriceRequest } from '../../models/change-price-request';
import { CreateProductResponse } from '../../models/create-product-response';

export interface ApiV1ProductProductIdChangePricePatch$Plain$Params {
  productId: number;
      body?: ChangePriceRequest
}

export function apiV1ProductProductIdChangePricePatch$Plain(http: HttpClient, rootUrl: string, params: ApiV1ProductProductIdChangePricePatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateProductResponse>> {
  const rb = new RequestBuilder(rootUrl, apiV1ProductProductIdChangePricePatch$Plain.PATH, 'patch');
  if (params) {
    rb.path('productId', params.productId, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreateProductResponse>;
    })
  );
}

apiV1ProductProductIdChangePricePatch$Plain.PATH = '/api/v1/Product/{productId}/ChangePrice';
