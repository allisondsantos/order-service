/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetProductResponse } from '../../models/get-product-response';

export interface ProductIdGet$Plain$Params {
  productId: number;
}

export function productIdGet$Plain(http: HttpClient, rootUrl: string, params: ProductIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetProductResponse>> {
  const rb = new RequestBuilder(rootUrl, productIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('productId', params.productId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetProductResponse>;
    })
  );
}

productIdGet$Plain.PATH = '/{productId}';
