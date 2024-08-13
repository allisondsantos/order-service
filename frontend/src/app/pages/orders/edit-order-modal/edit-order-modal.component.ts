import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../../../core/api/services';
import { GetOrderResponse } from '../../../core/api/models';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-edit-order-modal',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './edit-order-modal.component.html',
  styleUrl: './edit-order-modal.component.css'
})
export class EditOrderModalComponent implements OnInit {
  @Input() orderId: number = 0
  order: GetOrderResponse

  constructor(private orderService: OrderService) {
    this.order = { customerName: "", customerEmail: "" };
  }

  ngOnInit(): void {

    this.getOrder();
  }

  getOrder(): void {
    if (this.orderId > 0)
      this.orderService
        .apiV1OrderOrderIdGet$Json({ orderId: this.orderId })
        .subscribe(order => (this.order = order));
  }
}
