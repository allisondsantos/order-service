/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GetProductResponse } from '../../models/get-product-response';

export interface ProductIdGet$Json$Params {
  productId: number;
}

export function productIdGet$Json(http: HttpClient, rootUrl: string, params: ProductIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GetProductResponse>> {
  const rb = new RequestBuilder(rootUrl, productIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('productId', params.productId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GetProductResponse>;
    })
  );
}

productIdGet$Json.PATH = '/{productId}';
