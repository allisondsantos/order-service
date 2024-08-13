import { Component, Input, OnInit } from '@angular/core';
import { AddOrderItemRequest, GetAllProductsResponse } from '../../../core/api/models';
import { OrderItemService, OrderService, ProductService } from '../../../core/api/services';

@Component({
  selector: 'app-add-item-modal',
  standalone: true,
  imports: [],
  templateUrl: './add-item-modal.component.html',
  styleUrl: './add-item-modal.component.css'
})
export class AddItemModalComponent implements OnInit {
  @Input() OrderId: number = 0;
  newItem: AddOrderItemRequest | undefined;
  products: GetAllProductsResponse[] | undefined;

  constructor(
    private orderItemService: OrderItemService,
    private productService: ProductService) {

  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.productService
      .apiV1ProductGet$Json()
      .subscribe(products => (this.products = products));
  }

  addItemInOrder(): void {

  }
}
