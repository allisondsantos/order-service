/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiV1ProductGet$Json } from '../fn/product/api-v-1-product-get-json';
import { ApiV1ProductGet$Json$Params } from '../fn/product/api-v-1-product-get-json';
import { apiV1ProductGet$Plain } from '../fn/product/api-v-1-product-get-plain';
import { ApiV1ProductGet$Plain$Params } from '../fn/product/api-v-1-product-get-plain';
import { apiV1ProductPost$Json } from '../fn/product/api-v-1-product-post-json';
import { ApiV1ProductPost$Json$Params } from '../fn/product/api-v-1-product-post-json';
import { apiV1ProductPost$Plain } from '../fn/product/api-v-1-product-post-plain';
import { ApiV1ProductPost$Plain$Params } from '../fn/product/api-v-1-product-post-plain';
import { apiV1ProductProductIdChangeNamePatch$Json } from '../fn/product/api-v-1-product-product-id-change-name-patch-json';
import { ApiV1ProductProductIdChangeNamePatch$Json$Params } from '../fn/product/api-v-1-product-product-id-change-name-patch-json';
import { apiV1ProductProductIdChangeNamePatch$Plain } from '../fn/product/api-v-1-product-product-id-change-name-patch-plain';
import { ApiV1ProductProductIdChangeNamePatch$Plain$Params } from '../fn/product/api-v-1-product-product-id-change-name-patch-plain';
import { apiV1ProductProductIdChangePricePatch$Json } from '../fn/product/api-v-1-product-product-id-change-price-patch-json';
import { ApiV1ProductProductIdChangePricePatch$Json$Params } from '../fn/product/api-v-1-product-product-id-change-price-patch-json';
import { apiV1ProductProductIdChangePricePatch$Plain } from '../fn/product/api-v-1-product-product-id-change-price-patch-plain';
import { ApiV1ProductProductIdChangePricePatch$Plain$Params } from '../fn/product/api-v-1-product-product-id-change-price-patch-plain';
import { apiV1ProductProductIdDelete$Json } from '../fn/product/api-v-1-product-product-id-delete-json';
import { ApiV1ProductProductIdDelete$Json$Params } from '../fn/product/api-v-1-product-product-id-delete-json';
import { apiV1ProductProductIdDelete$Plain } from '../fn/product/api-v-1-product-product-id-delete-plain';
import { ApiV1ProductProductIdDelete$Plain$Params } from '../fn/product/api-v-1-product-product-id-delete-plain';
import { apiV1ProductProductIdGet$Json } from '../fn/product/api-v-1-product-product-id-get-json';
import { ApiV1ProductProductIdGet$Json$Params } from '../fn/product/api-v-1-product-product-id-get-json';
import { apiV1ProductProductIdGet$Plain } from '../fn/product/api-v-1-product-product-id-get-plain';
import { ApiV1ProductProductIdGet$Plain$Params } from '../fn/product/api-v-1-product-product-id-get-plain';
import { CreateProductResponse } from '../models/create-product-response';
import { GetAllProductsResponse } from '../models/get-all-products-response';
import { GetProductResponse } from '../models/get-product-response';
import { RemoveProductResponse } from '../models/remove-product-response';

@Injectable({ providedIn: 'root' })
export class ProductService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiV1ProductGet()` */
  static readonly ApiV1ProductGetPath = '/api/v1/Product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ProductGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ProductGet$Plain$Response(params?: ApiV1ProductGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetAllProductsResponse>>> {
    return apiV1ProductGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1ProductGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ProductGet$Plain(params?: ApiV1ProductGet$Plain$Params, context?: HttpContext): Observable<Array<GetAllProductsResponse>> {
    return this.apiV1ProductGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GetAllProductsResponse>>): Array<GetAllProductsResponse> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ProductGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ProductGet$Json$Response(params?: ApiV1ProductGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetAllProductsResponse>>> {
    return apiV1ProductGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1ProductGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ProductGet$Json(params?: ApiV1ProductGet$Json$Params, context?: HttpContext): Observable<Array<GetAllProductsResponse>> {
    return this.apiV1ProductGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GetAllProductsResponse>>): Array<GetAllProductsResponse> => r.body)
    );
  }

  /** Path part for operation `apiV1ProductPost()` */
  static readonly ApiV1ProductPostPath = '/api/v1/Product';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ProductPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ProductPost$Plain$Response(params?: ApiV1ProductPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateProductResponse>> {
    return apiV1ProductPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1ProductPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ProductPost$Plain(params?: ApiV1ProductPost$Plain$Params, context?: HttpContext): Observable<CreateProductResponse> {
    return this.apiV1ProductPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateProductResponse>): CreateProductResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ProductPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ProductPost$Json$Response(params?: ApiV1ProductPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateProductResponse>> {
    return apiV1ProductPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1ProductPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ProductPost$Json(params?: ApiV1ProductPost$Json$Params, context?: HttpContext): Observable<CreateProductResponse> {
    return this.apiV1ProductPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateProductResponse>): CreateProductResponse => r.body)
    );
  }

  /** Path part for operation `apiV1ProductProductIdGet()` */
  static readonly ApiV1ProductProductIdGetPath = '/api/v1/Product/{productId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ProductProductIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ProductProductIdGet$Plain$Response(params: ApiV1ProductProductIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetProductResponse>> {
    return apiV1ProductProductIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1ProductProductIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ProductProductIdGet$Plain(params: ApiV1ProductProductIdGet$Plain$Params, context?: HttpContext): Observable<GetProductResponse> {
    return this.apiV1ProductProductIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetProductResponse>): GetProductResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ProductProductIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ProductProductIdGet$Json$Response(params: ApiV1ProductProductIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GetProductResponse>> {
    return apiV1ProductProductIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1ProductProductIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ProductProductIdGet$Json(params: ApiV1ProductProductIdGet$Json$Params, context?: HttpContext): Observable<GetProductResponse> {
    return this.apiV1ProductProductIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetProductResponse>): GetProductResponse => r.body)
    );
  }

  /** Path part for operation `apiV1ProductProductIdDelete()` */
  static readonly ApiV1ProductProductIdDeletePath = '/api/v1/Product/{productId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ProductProductIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ProductProductIdDelete$Plain$Response(params: ApiV1ProductProductIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<RemoveProductResponse>> {
    return apiV1ProductProductIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1ProductProductIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ProductProductIdDelete$Plain(params: ApiV1ProductProductIdDelete$Plain$Params, context?: HttpContext): Observable<RemoveProductResponse> {
    return this.apiV1ProductProductIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<RemoveProductResponse>): RemoveProductResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ProductProductIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ProductProductIdDelete$Json$Response(params: ApiV1ProductProductIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<RemoveProductResponse>> {
    return apiV1ProductProductIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1ProductProductIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1ProductProductIdDelete$Json(params: ApiV1ProductProductIdDelete$Json$Params, context?: HttpContext): Observable<RemoveProductResponse> {
    return this.apiV1ProductProductIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<RemoveProductResponse>): RemoveProductResponse => r.body)
    );
  }

  /** Path part for operation `apiV1ProductProductIdChangeNamePatch()` */
  static readonly ApiV1ProductProductIdChangeNamePatchPath = '/api/v1/Product/{productId}/ChangeName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ProductProductIdChangeNamePatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ProductProductIdChangeNamePatch$Plain$Response(params: ApiV1ProductProductIdChangeNamePatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateProductResponse>> {
    return apiV1ProductProductIdChangeNamePatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1ProductProductIdChangeNamePatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ProductProductIdChangeNamePatch$Plain(params: ApiV1ProductProductIdChangeNamePatch$Plain$Params, context?: HttpContext): Observable<CreateProductResponse> {
    return this.apiV1ProductProductIdChangeNamePatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateProductResponse>): CreateProductResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ProductProductIdChangeNamePatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ProductProductIdChangeNamePatch$Json$Response(params: ApiV1ProductProductIdChangeNamePatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateProductResponse>> {
    return apiV1ProductProductIdChangeNamePatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1ProductProductIdChangeNamePatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ProductProductIdChangeNamePatch$Json(params: ApiV1ProductProductIdChangeNamePatch$Json$Params, context?: HttpContext): Observable<CreateProductResponse> {
    return this.apiV1ProductProductIdChangeNamePatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateProductResponse>): CreateProductResponse => r.body)
    );
  }

  /** Path part for operation `apiV1ProductProductIdChangePricePatch()` */
  static readonly ApiV1ProductProductIdChangePricePatchPath = '/api/v1/Product/{productId}/ChangePrice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ProductProductIdChangePricePatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ProductProductIdChangePricePatch$Plain$Response(params: ApiV1ProductProductIdChangePricePatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateProductResponse>> {
    return apiV1ProductProductIdChangePricePatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1ProductProductIdChangePricePatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ProductProductIdChangePricePatch$Plain(params: ApiV1ProductProductIdChangePricePatch$Plain$Params, context?: HttpContext): Observable<CreateProductResponse> {
    return this.apiV1ProductProductIdChangePricePatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateProductResponse>): CreateProductResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1ProductProductIdChangePricePatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ProductProductIdChangePricePatch$Json$Response(params: ApiV1ProductProductIdChangePricePatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateProductResponse>> {
    return apiV1ProductProductIdChangePricePatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1ProductProductIdChangePricePatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1ProductProductIdChangePricePatch$Json(params: ApiV1ProductProductIdChangePricePatch$Json$Params, context?: HttpContext): Observable<CreateProductResponse> {
    return this.apiV1ProductProductIdChangePricePatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateProductResponse>): CreateProductResponse => r.body)
    );
  }

}
