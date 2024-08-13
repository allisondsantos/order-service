/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateProductRequest } from '../../models/create-product-request';
import { CreateProductResponse } from '../../models/create-product-response';

export interface ApiV1ProductPost$Json$Params {
      body?: CreateProductRequest
}

export function apiV1ProductPost$Json(http: HttpClient, rootUrl: string, params?: ApiV1ProductPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateProductResponse>> {
  const rb = new RequestBuilder(rootUrl, apiV1ProductPost$Json.PATH, 'post');
  if (params) {
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

apiV1ProductPost$Json.PATH = '/api/v1/Product';
