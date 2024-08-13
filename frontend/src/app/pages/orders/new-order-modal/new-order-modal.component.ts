import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateOrderRequest } from '../../../core/api/models';
import { OrderService } from '../../../core/api/services';

@Component({
  selector: 'app-new-order-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-order-modal.component.html',
  styleUrl: './new-order-modal.component.css'
})
export class NewOrderModalComponent {
  newOrder: CreateOrderRequest
  constructor(private orderService: OrderService) {
    this.newOrder = { customerName: "", customerEmail: "" };
  }

  createProduct(): void {
    this.orderService
      .apiV1OrderPost$Json({ body: this.newOrder })
      .subscribe({
        next: (value: CreateOrderRequest) => {
          this.newOrder = { customerName: "", customerEmail: "" };
        },
        error: (error: Error) => {
          console.log(error);
        }
      });
  }
}
