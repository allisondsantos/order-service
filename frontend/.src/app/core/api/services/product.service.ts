/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CreateProductResponse } from '../models/create-product-response';
import { GetProductResponse } from '../models/get-product-response';
import { productIdChangeNamePatch$Json } from '../fn/product/product-id-change-name-patch-json';
import { ProductIdChangeNamePatch$Json$Params } from '../fn/product/product-id-change-name-patch-json';
import { productIdChangeNamePatch$Plain } from '../fn/product/product-id-change-name-patch-plain';
import { ProductIdChangeNamePatch$Plain$Params } from '../fn/product/product-id-change-name-patch-plain';
import { productIdChangePricePatch$Json } from '../fn/product/product-id-change-price-patch-json';
import { ProductIdChangePricePatch$Json$Params } from '../fn/product/product-id-change-price-patch-json';
import { productIdChangePricePatch$Plain } from '../fn/product/product-id-change-price-patch-plain';
import { ProductIdChangePricePatch$Plain$Params } from '../fn/product/product-id-change-price-patch-plain';
import { productIdDelete } from '../fn/product/product-id-delete';
import { ProductIdDelete$Params } from '../fn/product/product-id-delete';
import { productIdGet$Json } from '../fn/product/product-id-get-json';
import { ProductIdGet$Json$Params } from '../fn/product/product-id-get-json';
import { productIdGet$Plain } from '../fn/product/product-id-get-plain';
import { ProductIdGet$Plain$Params } from '../fn/product/product-id-get-plain';

@Injectable({ providedIn: 'root' })
export class ProductService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `productIdGet()` */
  static readonly ProductIdGetPath = '/{productId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  productIdGet$Plain$Response(params: ProductIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetProductResponse>> {
    return productIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productIdGet$Plain(params: ProductIdGet$Plain$Params, context?: HttpContext): Observable<GetProductResponse> {
    return this.productIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetProductResponse>): GetProductResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  productIdGet$Json$Response(params: ProductIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GetProductResponse>> {
    return productIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productIdGet$Json(params: ProductIdGet$Json$Params, context?: HttpContext): Observable<GetProductResponse> {
    return this.productIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetProductResponse>): GetProductResponse => r.body)
    );
  }

  /** Path part for operation `productIdDelete()` */
  static readonly ProductIdDeletePath = '/{productId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  productIdDelete$Response(params: ProductIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return productIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  productIdDelete(params: ProductIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.productIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `productIdChangeNamePatch()` */
  static readonly ProductIdChangeNamePatchPath = '/{productId}/ChangeName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productIdChangeNamePatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  productIdChangeNamePatch$Plain$Response(params: ProductIdChangeNamePatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateProductResponse>> {
    return productIdChangeNamePatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productIdChangeNamePatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  productIdChangeNamePatch$Plain(params: ProductIdChangeNamePatch$Plain$Params, context?: HttpContext): Observable<CreateProductResponse> {
    return this.productIdChangeNamePatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateProductResponse>): CreateProductResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productIdChangeNamePatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  productIdChangeNamePatch$Json$Response(params: ProductIdChangeNamePatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateProductResponse>> {
    return productIdChangeNamePatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productIdChangeNamePatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  productIdChangeNamePatch$Json(params: ProductIdChangeNamePatch$Json$Params, context?: HttpContext): Observable<CreateProductResponse> {
    return this.productIdChangeNamePatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateProductResponse>): CreateProductResponse => r.body)
    );
  }

  /** Path part for operation `productIdChangePricePatch()` */
  static readonly ProductIdChangePricePatchPath = '/{productId}/ChangePrice';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productIdChangePricePatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  productIdChangePricePatch$Plain$Response(params: ProductIdChangePricePatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateProductResponse>> {
    return productIdChangePricePatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productIdChangePricePatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  productIdChangePricePatch$Plain(params: ProductIdChangePricePatch$Plain$Params, context?: HttpContext): Observable<CreateProductResponse> {
    return this.productIdChangePricePatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateProductResponse>): CreateProductResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `productIdChangePricePatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  productIdChangePricePatch$Json$Response(params: ProductIdChangePricePatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateProductResponse>> {
    return productIdChangePricePatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `productIdChangePricePatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  productIdChangePricePatch$Json(params: ProductIdChangePricePatch$Json$Params, context?: HttpContext): Observable<CreateProductResponse> {
    return this.productIdChangePricePatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateProductResponse>): CreateProductResponse => r.body)
    );
  }

}
