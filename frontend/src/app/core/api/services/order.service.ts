/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiV1OrderGet$Json } from '../fn/order/api-v-1-order-get-json';
import { ApiV1OrderGet$Json$Params } from '../fn/order/api-v-1-order-get-json';
import { apiV1OrderGet$Plain } from '../fn/order/api-v-1-order-get-plain';
import { ApiV1OrderGet$Plain$Params } from '../fn/order/api-v-1-order-get-plain';
import { apiV1OrderOrderIdChangeCustomerEmailPatch$Json } from '../fn/order/api-v-1-order-order-id-change-customer-email-patch-json';
import { ApiV1OrderOrderIdChangeCustomerEmailPatch$Json$Params } from '../fn/order/api-v-1-order-order-id-change-customer-email-patch-json';
import { apiV1OrderOrderIdChangeCustomerEmailPatch$Plain } from '../fn/order/api-v-1-order-order-id-change-customer-email-patch-plain';
import { ApiV1OrderOrderIdChangeCustomerEmailPatch$Plain$Params } from '../fn/order/api-v-1-order-order-id-change-customer-email-patch-plain';
import { apiV1OrderOrderIdChangeCustomerNamePatch$Json } from '../fn/order/api-v-1-order-order-id-change-customer-name-patch-json';
import { ApiV1OrderOrderIdChangeCustomerNamePatch$Json$Params } from '../fn/order/api-v-1-order-order-id-change-customer-name-patch-json';
import { apiV1OrderOrderIdChangeCustomerNamePatch$Plain } from '../fn/order/api-v-1-order-order-id-change-customer-name-patch-plain';
import { ApiV1OrderOrderIdChangeCustomerNamePatch$Plain$Params } from '../fn/order/api-v-1-order-order-id-change-customer-name-patch-plain';
import { apiV1OrderOrderIdDelete$Json } from '../fn/order/api-v-1-order-order-id-delete-json';
import { ApiV1OrderOrderIdDelete$Json$Params } from '../fn/order/api-v-1-order-order-id-delete-json';
import { apiV1OrderOrderIdDelete$Plain } from '../fn/order/api-v-1-order-order-id-delete-plain';
import { ApiV1OrderOrderIdDelete$Plain$Params } from '../fn/order/api-v-1-order-order-id-delete-plain';
import { apiV1OrderOrderIdGet$Json } from '../fn/order/api-v-1-order-order-id-get-json';
import { ApiV1OrderOrderIdGet$Json$Params } from '../fn/order/api-v-1-order-order-id-get-json';
import { apiV1OrderOrderIdGet$Plain } from '../fn/order/api-v-1-order-order-id-get-plain';
import { ApiV1OrderOrderIdGet$Plain$Params } from '../fn/order/api-v-1-order-order-id-get-plain';
import { apiV1OrderPost$Json } from '../fn/order/api-v-1-order-post-json';
import { ApiV1OrderPost$Json$Params } from '../fn/order/api-v-1-order-post-json';
import { apiV1OrderPost$Plain } from '../fn/order/api-v-1-order-post-plain';
import { ApiV1OrderPost$Plain$Params } from '../fn/order/api-v-1-order-post-plain';
import { ChangeCustomerNameResponse } from '../models/change-customer-name-response';
import { CreateOrderResponse } from '../models/create-order-response';
import { GetAllOrdersResponse } from '../models/get-all-orders-response';
import { GetOrderResponse } from '../models/get-order-response';
import { RemoveOrderResponse } from '../models/remove-order-response';

@Injectable({ providedIn: 'root' })
export class OrderService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiV1OrderGet()` */
  static readonly ApiV1OrderGetPath = '/api/v1/Order';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderGet$Plain$Response(params?: ApiV1OrderGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetAllOrdersResponse>>> {
    return apiV1OrderGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderGet$Plain(params?: ApiV1OrderGet$Plain$Params, context?: HttpContext): Observable<Array<GetAllOrdersResponse>> {
    return this.apiV1OrderGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GetAllOrdersResponse>>): Array<GetAllOrdersResponse> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderGet$Json$Response(params?: ApiV1OrderGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GetAllOrdersResponse>>> {
    return apiV1OrderGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderGet$Json(params?: ApiV1OrderGet$Json$Params, context?: HttpContext): Observable<Array<GetAllOrdersResponse>> {
    return this.apiV1OrderGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GetAllOrdersResponse>>): Array<GetAllOrdersResponse> => r.body)
    );
  }

  /** Path part for operation `apiV1OrderPost()` */
  static readonly ApiV1OrderPostPath = '/api/v1/Order';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderPost$Plain$Response(params?: ApiV1OrderPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateOrderResponse>> {
    return apiV1OrderPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderPost$Plain(params?: ApiV1OrderPost$Plain$Params, context?: HttpContext): Observable<CreateOrderResponse> {
    return this.apiV1OrderPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateOrderResponse>): CreateOrderResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderPost$Json$Response(params?: ApiV1OrderPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CreateOrderResponse>> {
    return apiV1OrderPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderPost$Json(params?: ApiV1OrderPost$Json$Params, context?: HttpContext): Observable<CreateOrderResponse> {
    return this.apiV1OrderPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreateOrderResponse>): CreateOrderResponse => r.body)
    );
  }

  /** Path part for operation `apiV1OrderOrderIdGet()` */
  static readonly ApiV1OrderOrderIdGetPath = '/api/v1/Order/{orderId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderOrderIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderOrderIdGet$Plain$Response(params: ApiV1OrderOrderIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<GetOrderResponse>> {
    return apiV1OrderOrderIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderOrderIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderOrderIdGet$Plain(params: ApiV1OrderOrderIdGet$Plain$Params, context?: HttpContext): Observable<GetOrderResponse> {
    return this.apiV1OrderOrderIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetOrderResponse>): GetOrderResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderOrderIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderOrderIdGet$Json$Response(params: ApiV1OrderOrderIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<GetOrderResponse>> {
    return apiV1OrderOrderIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderOrderIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderOrderIdGet$Json(params: ApiV1OrderOrderIdGet$Json$Params, context?: HttpContext): Observable<GetOrderResponse> {
    return this.apiV1OrderOrderIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<GetOrderResponse>): GetOrderResponse => r.body)
    );
  }

  /** Path part for operation `apiV1OrderOrderIdDelete()` */
  static readonly ApiV1OrderOrderIdDeletePath = '/api/v1/Order/{orderId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderOrderIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderOrderIdDelete$Plain$Response(params: ApiV1OrderOrderIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<RemoveOrderResponse>> {
    return apiV1OrderOrderIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderOrderIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderOrderIdDelete$Plain(params: ApiV1OrderOrderIdDelete$Plain$Params, context?: HttpContext): Observable<RemoveOrderResponse> {
    return this.apiV1OrderOrderIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<RemoveOrderResponse>): RemoveOrderResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderOrderIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderOrderIdDelete$Json$Response(params: ApiV1OrderOrderIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<RemoveOrderResponse>> {
    return apiV1OrderOrderIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderOrderIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiV1OrderOrderIdDelete$Json(params: ApiV1OrderOrderIdDelete$Json$Params, context?: HttpContext): Observable<RemoveOrderResponse> {
    return this.apiV1OrderOrderIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<RemoveOrderResponse>): RemoveOrderResponse => r.body)
    );
  }

  /** Path part for operation `apiV1OrderOrderIdChangeCustomerNamePatch()` */
  static readonly ApiV1OrderOrderIdChangeCustomerNamePatchPath = '/api/v1/Order/{orderId}/ChangeCustomerName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderOrderIdChangeCustomerNamePatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderOrderIdChangeCustomerNamePatch$Plain$Response(params: ApiV1OrderOrderIdChangeCustomerNamePatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ChangeCustomerNameResponse>> {
    return apiV1OrderOrderIdChangeCustomerNamePatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderOrderIdChangeCustomerNamePatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderOrderIdChangeCustomerNamePatch$Plain(params: ApiV1OrderOrderIdChangeCustomerNamePatch$Plain$Params, context?: HttpContext): Observable<ChangeCustomerNameResponse> {
    return this.apiV1OrderOrderIdChangeCustomerNamePatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ChangeCustomerNameResponse>): ChangeCustomerNameResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderOrderIdChangeCustomerNamePatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderOrderIdChangeCustomerNamePatch$Json$Response(params: ApiV1OrderOrderIdChangeCustomerNamePatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ChangeCustomerNameResponse>> {
    return apiV1OrderOrderIdChangeCustomerNamePatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderOrderIdChangeCustomerNamePatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderOrderIdChangeCustomerNamePatch$Json(params: ApiV1OrderOrderIdChangeCustomerNamePatch$Json$Params, context?: HttpContext): Observable<ChangeCustomerNameResponse> {
    return this.apiV1OrderOrderIdChangeCustomerNamePatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ChangeCustomerNameResponse>): ChangeCustomerNameResponse => r.body)
    );
  }

  /** Path part for operation `apiV1OrderOrderIdChangeCustomerEmailPatch()` */
  static readonly ApiV1OrderOrderIdChangeCustomerEmailPatchPath = '/api/v1/Order/{orderId}/ChangeCustomerEmail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderOrderIdChangeCustomerEmailPatch$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderOrderIdChangeCustomerEmailPatch$Plain$Response(params: ApiV1OrderOrderIdChangeCustomerEmailPatch$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ChangeCustomerNameResponse>> {
    return apiV1OrderOrderIdChangeCustomerEmailPatch$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderOrderIdChangeCustomerEmailPatch$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderOrderIdChangeCustomerEmailPatch$Plain(params: ApiV1OrderOrderIdChangeCustomerEmailPatch$Plain$Params, context?: HttpContext): Observable<ChangeCustomerNameResponse> {
    return this.apiV1OrderOrderIdChangeCustomerEmailPatch$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ChangeCustomerNameResponse>): ChangeCustomerNameResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiV1OrderOrderIdChangeCustomerEmailPatch$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderOrderIdChangeCustomerEmailPatch$Json$Response(params: ApiV1OrderOrderIdChangeCustomerEmailPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ChangeCustomerNameResponse>> {
    return apiV1OrderOrderIdChangeCustomerEmailPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiV1OrderOrderIdChangeCustomerEmailPatch$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiV1OrderOrderIdChangeCustomerEmailPatch$Json(params: ApiV1OrderOrderIdChangeCustomerEmailPatch$Json$Params, context?: HttpContext): Observable<ChangeCustomerNameResponse> {
    return this.apiV1OrderOrderIdChangeCustomerEmailPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ChangeCustomerNameResponse>): ChangeCustomerNameResponse => r.body)
    );
  }

}
