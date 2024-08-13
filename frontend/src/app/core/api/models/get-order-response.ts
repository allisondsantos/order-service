/* tslint:disable */
/* eslint-disable */
import { OrderDetailedItemDto } from '../models/order-detailed-item-dto';
export interface GetOrderResponse {
  customerEmail?: string | null;
  customerName?: string | null;
  id?: number;
  orderItems?: Array<OrderDetailedItemDto> | null;
  paid?: boolean;
  totalAmount?: number;
}
