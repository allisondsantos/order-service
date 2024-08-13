import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../core/api/services';
import { GetAllOrdersResponse, GetOrderResponse, RemoveOrderResponse } from '../../core/api/models';
import { NgFor } from '@angular/common';
import { NewOrderModalComponent } from './new-order-modal/new-order-modal.component';
import { EditOrderModalComponent } from './edit-order-modal/edit-order-modal.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgFor, NewOrderModalComponent, EditOrderModalComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})

export class OrdersComponent implements OnInit {
  orders: GetAllOrdersResponse[] | undefined;

  constructor(private orderService: OrderService) {

  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.orderService
      .apiV1OrderGet$Json()
      .subscribe(orders => (this.orders = orders));
  }

  removeOrder(orderId: number) {
    this.orderService
      .apiV1OrderOrderIdDelete$Json({ orderId })
      .subscribe({
        next: (value: RemoveOrderResponse) => {
          let productIndex = this.orders!.findIndex(p => p.id == orderId);
          this.orders!.splice(productIndex, 1);
        },
        error: (error: Error) => {
          console.log(error);
        }
      });
  }
}
