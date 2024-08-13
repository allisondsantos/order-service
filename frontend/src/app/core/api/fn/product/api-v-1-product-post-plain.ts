/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateProductRequest } from '../../models/create-product-request';
import { CreateProductResponse } from '../../models/create-product-response';

export interface ApiV1ProductPost$Plain$Params {
      body?: CreateProductRequest
}

export function apiV1ProductPost$Plain(http: HttpClient, rootUrl: string, params?: ApiV1ProductPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateProductResponse>> {
  const rb = new RequestBuilder(rootUrl, apiV1ProductPost$Plain.PATH, 'post');
  if (params) {
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

apiV1ProductPost$Plain.PATH = '/api/v1/Product';
