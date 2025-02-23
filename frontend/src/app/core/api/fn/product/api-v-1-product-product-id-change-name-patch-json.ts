/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ChangeNameRequest } from '../../models/change-name-request';
import { CreateProductResponse } from '../../models/create-product-response';

export interface ApiV1ProductProductIdChangeNamePatch$Json$Params {
  productId: number;
      body?: ChangeNameRequest
}

export function apiV1ProductProductIdChangeNamePatch$Json(http: HttpClient, rootUrl: string, params: ApiV1ProductProductIdChangeNamePatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateProductResponse>> {
  const rb = new RequestBuilder(rootUrl, apiV1ProductProductIdChangeNamePatch$Json.PATH, 'patch');
  if (params) {
    rb.path('productId', params.productId, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreateProductResponse>;
    })
  );
}

apiV1ProductProductIdChangeNamePatch$Json.PATH = '/api/v1/Product/{productId}/ChangeName';
