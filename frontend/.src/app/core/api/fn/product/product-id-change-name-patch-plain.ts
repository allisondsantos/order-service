/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateProductResponse } from '../../models/create-product-response';

export interface ProductIdChangeNamePatch$Plain$Params {
  productId: number;
      body?: string
}

export function productIdChangeNamePatch$Plain(http: HttpClient, rootUrl: string, params: ProductIdChangeNamePatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateProductResponse>> {
  const rb = new RequestBuilder(rootUrl, productIdChangeNamePatch$Plain.PATH, 'patch');
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

productIdChangeNamePatch$Plain.PATH = '/{productId}/ChangeName';
