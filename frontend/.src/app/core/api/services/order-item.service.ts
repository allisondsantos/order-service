/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { GetOrderItemResponse } from '../models/get-order-item-response';
import { orderItemIdChangeQuantityPatch } from '../fn/order-item/order-item-id-change-quantity-patch';
import { OrderItemIdChangeQuantityPatch$Params } from '../fn/order-item/order-item-id-change-quantity-patch';
import { orderItemIdDelete } from '../fn/order-item/order-item-id-delete';
import { OrderItemIdDelete$Params } from '../fn/order-item/order-item-id-delete';
import { orderItemIdGet$Json } from '../fn/order-item/order-item-id-get-json';
import { OrderItemIdGet$Json$Params } from '../fn/order-item/order-item-id-get-json';
import { orderItemIdGet$Plain } from '../fn/order-item/order-item-id-get-plain';
import { OrderItemIdGet$Plain$Params } from '../fn/order-item/order-item-id-get-plain';

@Injectable({ providedIn: 'root' })
export class OrderItemService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `orderItemIdGet()` */
  static readonly OrderItemIdGetPath = '/{orderItemId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderItemIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderItemIdGet$Plain$Response(params: OrderItemIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetOrderItemResponse>> {
    return orderItemIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderItemIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderItemIdGet$Plain(params: OrderItemIdGet$Plain$Params, context?: HttpContext): Observable<GetOrderItemResponse> {
    return this.orderItemIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetOrderItemResponse>): GetOrderItemResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderItemIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderItemIdGet$Json$Response(params: OrderItemIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GetOrderItemResponse>> {
    return orderItemIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderItemIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderItemIdGet$Json(params: OrderItemIdGet$Json$Params, context?: HttpContext): Observable<GetOrderItemResponse> {
    return this.orderItemIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetOrderItemResponse>): GetOrderItemResponse => r.body)
    );
  }

  /** Path part for operation `orderItemIdDelete()` */
  static readonly OrderItemIdDeletePath = '/{orderItemId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderItemIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderItemIdDelete$Response(params: OrderItemIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orderItemIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderItemIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderItemIdDelete(params: OrderItemIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.orderItemIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orderItemIdChangeQuantityPatch()` */
  static readonly OrderItemIdChangeQuantityPatchPath = '/{orderItemId}/ChangeQuantity';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderItemIdChangeQuantityPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  orderItemIdChangeQuantityPatch$Response(params: OrderItemIdChangeQuantityPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orderItemIdChangeQuantityPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderItemIdChangeQuantityPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  orderItemIdChangeQuantityPatch(params: OrderItemIdChangeQuantityPatch$Params, context?: HttpContext): Observable<void> {
    return this.orderItemIdChangeQuantityPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
