/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AddOrderItemResponse } from '../models/add-order-item-response';
import { apiV1OrderItemOrderItemIdChangeQuantityPatch } from '../fn/order-item/api-v-1-order-item-order-item-id-change-quantity-patch';
import { ApiV1OrderItemOrderItemIdChangeQuantityPatch$Params } from '../fn/order-item/api-v-1-order-item-order-item-id-change-quantity-patch';
import { apiV1OrderItemOrderItemIdDelete$Json } from '../fn/order-item/api-v-1-order-item-order-item-id-delete-json';
import { ApiV1OrderItemOrderItemIdDelete$Json$Params } from '../fn/order-item/api-v-1-order-item-order-item-id-delete-json';
import { apiV1OrderItemOrderItemIdDelete$Plain } from '../fn/order-item/api-v-1-order-item-order-item-id-delete-plain';
import { ApiV1OrderItemOrderItemIdDelete$Plain$Params } from '../fn/order-item/api-v-1-order-item-order-item-id-delete-plain';
import { apiV1OrderItemOrderItemIdGet$Json } from '../fn/order-item/api-v-1-order-item-order-item-id-get-json';
import { ApiV1OrderItemOrderItemIdGet$Json$Params } from '../fn/order-item/api-v-1-order-item-order-item-id-get-json';
import { apiV1OrderItemOrderItemIdGet$Plain } from '../fn/order-item/api-v-1-order-item-order-item-id-get-plain';
import { ApiV1OrderItemOrderItemIdGet$Plain$Params } from '../fn/order-item/api-v-1-order-item-order-item-id-get-plain';
import { apiV1OrderItemPost$Json } from '../fn/order-item/api-v-1-order-item-post-json';
import { ApiV1OrderItemPost$Json$Params } from '../fn/order-item/api-v-1-order-item-post-json';
import { apiV1OrderItemPost$Plain } from '../fn/order-item/api-v-1-order-item-post-plain';
import { ApiV1OrderItemPost$Plain$Params } from '../fn/order-item/api-v-1-order-item-post-plain';
import { GetOrderItemResponse } from '../models/get-order-item-response';
import { RemoveOrderItemResponse } from '../models/remove-order-item-response';

@Injectable({ providedIn: 'root' })
export class OrderItemService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiV1OrderItemOrderItemIdGet()` */
  static readonly ApiV1OrderItemOrderItemIdGetPath = '/api/v1/OrderItem/{orderItemId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderItemOrderItemIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderItemOrderItemIdGet$Plain$Response(params: ApiV1OrderItemOrderItemIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetOrderItemResponse>> {
    return apiV1OrderItemOrderItemIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderItemOrderItemIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderItemOrderItemIdGet$Plain(params: ApiV1OrderItemOrderItemIdGet$Plain$Params, context?: HttpContext): Observable<GetOrderItemResponse> {
    return this.apiV1OrderItemOrderItemIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetOrderItemResponse>): GetOrderItemResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderItemOrderItemIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderItemOrderItemIdGet$Json$Response(params: ApiV1OrderItemOrderItemIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GetOrderItemResponse>> {
    return apiV1OrderItemOrderItemIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderItemOrderItemIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderItemOrderItemIdGet$Json(params: ApiV1OrderItemOrderItemIdGet$Json$Params, context?: HttpContext): Observable<GetOrderItemResponse> {
    return this.apiV1OrderItemOrderItemIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetOrderItemResponse>): GetOrderItemResponse => r.body)
    );
  }

  /** Path part for operation `apiV1OrderItemOrderItemIdDelete()` */
  static readonly ApiV1OrderItemOrderItemIdDeletePath = '/api/v1/OrderItem/{orderItemId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderItemOrderItemIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderItemOrderItemIdDelete$Plain$Response(params: ApiV1OrderItemOrderItemIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<RemoveOrderItemResponse>> {
    return apiV1OrderItemOrderItemIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderItemOrderItemIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderItemOrderItemIdDelete$Plain(params: ApiV1OrderItemOrderItemIdDelete$Plain$Params, context?: HttpContext): Observable<RemoveOrderItemResponse> {
    return this.apiV1OrderItemOrderItemIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<RemoveOrderItemResponse>): RemoveOrderItemResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderItemOrderItemIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderItemOrderItemIdDelete$Json$Response(params: ApiV1OrderItemOrderItemIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<RemoveOrderItemResponse>> {
    return apiV1OrderItemOrderItemIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderItemOrderItemIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderItemOrderItemIdDelete$Json(params: ApiV1OrderItemOrderItemIdDelete$Json$Params, context?: HttpContext): Observable<RemoveOrderItemResponse> {
    return this.apiV1OrderItemOrderItemIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<RemoveOrderItemResponse>): RemoveOrderItemResponse => r.body)
    );
  }

  /** Path part for operation `apiV1OrderItemPost()` */
  static readonly ApiV1OrderItemPostPath = '/api/v1/OrderItem';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderItemPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderItemPost$Plain$Response(params?: ApiV1OrderItemPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<AddOrderItemResponse>> {
    return apiV1OrderItemPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderItemPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderItemPost$Plain(params?: ApiV1OrderItemPost$Plain$Params, context?: HttpContext): Observable<AddOrderItemResponse> {
    return this.apiV1OrderItemPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AddOrderItemResponse>): AddOrderItemResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderItemPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderItemPost$Json$Response(params?: ApiV1OrderItemPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<AddOrderItemResponse>> {
    return apiV1OrderItemPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderItemPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderItemPost$Json(params?: ApiV1OrderItemPost$Json$Params, context?: HttpContext): Observable<AddOrderItemResponse> {
    return this.apiV1OrderItemPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AddOrderItemResponse>): AddOrderItemResponse => r.body)
    );
  }

  /** Path part for operation `apiV1OrderItemOrderItemIdChangeQuantityPatch()` */
  static readonly ApiV1OrderItemOrderItemIdChangeQuantityPatchPath = '/api/v1/OrderItem/{orderItemId}/ChangeQuantity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderItemOrderItemIdChangeQuantityPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderItemOrderItemIdChangeQuantityPatch$Response(params: ApiV1OrderItemOrderItemIdChangeQuantityPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiV1OrderItemOrderItemIdChangeQuantityPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderItemOrderItemIdChangeQuantityPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderItemOrderItemIdChangeQuantityPatch(params: ApiV1OrderItemOrderItemIdChangeQuantityPatch$Params, context?: HttpContext): Observable<void> {
    return this.apiV1OrderItemOrderItemIdChangeQuantityPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
