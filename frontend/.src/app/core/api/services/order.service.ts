/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ChangeCustomerNameResponse } from '../models/change-customer-name-response';
import { CreateOrderResponse } from '../models/create-order-response';
import { GetOrderResponse } from '../models/get-order-response';
import { orderGet$Json } from '../fn/order/order-get-json';
import { OrderGet$Json$Params } from '../fn/order/order-get-json';
import { orderGet$Plain } from '../fn/order/order-get-plain';
import { OrderGet$Plain$Params } from '../fn/order/order-get-plain';
import { orderOrderIdChangeCustomerEmailPatch$Json } from '../fn/order/order-order-id-change-customer-email-patch-json';
import { OrderOrderIdChangeCustomerEmailPatch$Json$Params } from '../fn/order/order-order-id-change-customer-email-patch-json';
import { orderOrderIdChangeCustomerEmailPatch$Plain } from '../fn/order/order-order-id-change-customer-email-patch-plain';
import { OrderOrderIdChangeCustomerEmailPatch$Plain$Params } from '../fn/order/order-order-id-change-customer-email-patch-plain';
import { orderOrderIdChangeCustomerNamePatch$Json } from '../fn/order/order-order-id-change-customer-name-patch-json';
import { OrderOrderIdChangeCustomerNamePatch$Json$Params } from '../fn/order/order-order-id-change-customer-name-patch-json';
import { orderOrderIdChangeCustomerNamePatch$Plain } from '../fn/order/order-order-id-change-customer-name-patch-plain';
import { OrderOrderIdChangeCustomerNamePatch$Plain$Params } from '../fn/order/order-order-id-change-customer-name-patch-plain';
import { orderOrderIdDelete } from '../fn/order/order-order-id-delete';
import { OrderOrderIdDelete$Params } from '../fn/order/order-order-id-delete';
import { orderOrderIdGet$Json } from '../fn/order/order-order-id-get-json';
import { OrderOrderIdGet$Json$Params } from '../fn/order/order-order-id-get-json';
import { orderOrderIdGet$Plain } from '../fn/order/order-order-id-get-plain';
import { OrderOrderIdGet$Plain$Params } from '../fn/order/order-order-id-get-plain';
import { orderPost$Json } from '../fn/order/order-post-json';
import { OrderPost$Json$Params } from '../fn/order/order-post-json';
import { orderPost$Plain } from '../fn/order/order-post-plain';
import { OrderPost$Plain$Params } from '../fn/order/order-post-plain';

@Injectable({ providedIn: 'root' })
export class OrderService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `orderGet()` */
  static readonly OrderGetPath = '/Order';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderGet$Plain$Response(params?: OrderGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateOrderResponse>> {
    return orderGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderGet$Plain(params?: OrderGet$Plain$Params, context?: HttpContext): Observable<CreateOrderResponse> {
    return this.orderGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateOrderResponse>): CreateOrderResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderGet$Json$Response(params?: OrderGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateOrderResponse>> {
    return orderGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderGet$Json(params?: OrderGet$Json$Params, context?: HttpContext): Observable<CreateOrderResponse> {
    return this.orderGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateOrderResponse>): CreateOrderResponse => r.body)
    );
  }

  /** Path part for operation `orderPost()` */
  static readonly OrderPostPath = '/Order';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  orderPost$Plain$Response(params?: OrderPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateOrderResponse>> {
    return orderPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  orderPost$Plain(params?: OrderPost$Plain$Params, context?: HttpContext): Observable<CreateOrderResponse> {
    return this.orderPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateOrderResponse>): CreateOrderResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  orderPost$Json$Response(params?: OrderPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateOrderResponse>> {
    return orderPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  orderPost$Json(params?: OrderPost$Json$Params, context?: HttpContext): Observable<CreateOrderResponse> {
    return this.orderPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateOrderResponse>): CreateOrderResponse => r.body)
    );
  }

  /** Path part for operation `orderOrderIdGet()` */
  static readonly OrderOrderIdGetPath = '/Order/{orderId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderOrderIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderOrderIdGet$Plain$Response(params: OrderOrderIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetOrderResponse>> {
    return orderOrderIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderOrderIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderOrderIdGet$Plain(params: OrderOrderIdGet$Plain$Params, context?: HttpContext): Observable<GetOrderResponse> {
    return this.orderOrderIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetOrderResponse>): GetOrderResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderOrderIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderOrderIdGet$Json$Response(params: OrderOrderIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GetOrderResponse>> {
    return orderOrderIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderOrderIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderOrderIdGet$Json(params: OrderOrderIdGet$Json$Params, context?: HttpContext): Observable<GetOrderResponse> {
    return this.orderOrderIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetOrderResponse>): GetOrderResponse => r.body)
    );
  }

  /** Path part for operation `orderOrderIdDelete()` */
  static readonly OrderOrderIdDeletePath = '/Order/{orderId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderOrderIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderOrderIdDelete$Response(params: OrderOrderIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orderOrderIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderOrderIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderOrderIdDelete(params: OrderOrderIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.orderOrderIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orderOrderIdChangeCustomerNamePatch()` */
  static readonly OrderOrderIdChangeCustomerNamePatchPath = '/Order/{orderId}/ChangeCustomerName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderOrderIdChangeCustomerNamePatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  orderOrderIdChangeCustomerNamePatch$Plain$Response(params: OrderOrderIdChangeCustomerNamePatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ChangeCustomerNameResponse>> {
    return orderOrderIdChangeCustomerNamePatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderOrderIdChangeCustomerNamePatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  orderOrderIdChangeCustomerNamePatch$Plain(params: OrderOrderIdChangeCustomerNamePatch$Plain$Params, context?: HttpContext): Observable<ChangeCustomerNameResponse> {
    return this.orderOrderIdChangeCustomerNamePatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ChangeCustomerNameResponse>): ChangeCustomerNameResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderOrderIdChangeCustomerNamePatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  orderOrderIdChangeCustomerNamePatch$Json$Response(params: OrderOrderIdChangeCustomerNamePatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ChangeCustomerNameResponse>> {
    return orderOrderIdChangeCustomerNamePatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderOrderIdChangeCustomerNamePatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  orderOrderIdChangeCustomerNamePatch$Json(params: OrderOrderIdChangeCustomerNamePatch$Json$Params, context?: HttpContext): Observable<ChangeCustomerNameResponse> {
    return this.orderOrderIdChangeCustomerNamePatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ChangeCustomerNameResponse>): ChangeCustomerNameResponse => r.body)
    );
  }

  /** Path part for operation `orderOrderIdChangeCustomerEmailPatch()` */
  static readonly OrderOrderIdChangeCustomerEmailPatchPath = '/Order/{orderId}/ChangeCustomerEmail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderOrderIdChangeCustomerEmailPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  orderOrderIdChangeCustomerEmailPatch$Plain$Response(params: OrderOrderIdChangeCustomerEmailPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ChangeCustomerNameResponse>> {
    return orderOrderIdChangeCustomerEmailPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderOrderIdChangeCustomerEmailPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  orderOrderIdChangeCustomerEmailPatch$Plain(params: OrderOrderIdChangeCustomerEmailPatch$Plain$Params, context?: HttpContext): Observable<ChangeCustomerNameResponse> {
    return this.orderOrderIdChangeCustomerEmailPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ChangeCustomerNameResponse>): ChangeCustomerNameResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderOrderIdChangeCustomerEmailPatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  orderOrderIdChangeCustomerEmailPatch$Json$Response(params: OrderOrderIdChangeCustomerEmailPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ChangeCustomerNameResponse>> {
    return orderOrderIdChangeCustomerEmailPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderOrderIdChangeCustomerEmailPatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  orderOrderIdChangeCustomerEmailPatch$Json(params: OrderOrderIdChangeCustomerEmailPatch$Json$Params, context?: HttpContext): Observable<ChangeCustomerNameResponse> {
    return this.orderOrderIdChangeCustomerEmailPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ChangeCustomerNameResponse>): ChangeCustomerNameResponse => r.body)
    );
  }

}
