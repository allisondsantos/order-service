import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CreateProductRequest, GetProductResponse, RemoveProductResponse } from '../../core/api/models';
import { ProductService } from '../../core/api/services';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import CreateModalComponent from './create-modal/create-modal.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, FormsModule, CreateModalComponent, EditModalComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})


export default class ProductsComponent implements OnInit {
  products: GetProductResponse[] | undefined;
  product: Product;
  isInputProductNameDisabled: boolean = true;
  isInputProductPriceDisabled: boolean = true;

  constructor(private productService: ProductService) {
    this.product = { id: 0, name: "", price: 0 };
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.productService
      .apiV1ProductGet$Json()
      .subscribe(products => (this.products = products));
  }

  createProduct(): void {
    this.productService
      .apiV1ProductPost$Json({ body: this.product })
      .subscribe({
        next: (value: CreateProductRequest) => {
          this.products?.push(value)
          this.product = { name: "", price: 0 };
        },
        error: (error: Error) => {
          console.log(error);
        }
      });
  }

  removeProduct(productId: number): void {
    this.productService
      .apiV1ProductProductIdDelete$Json({
        productId: productId,
      })
      .subscribe({
        next: (value: RemoveProductResponse) => {
          let productIndex = this.products!.findIndex(p => p.id == productId);
          this.products!.splice(productIndex, 1);
        },
        error: (error: Error) => {
          console.log(error);
        }
      });
  }

}

interface Product {
  id?: number | null;
  name?: string | null;
  price?: number;
}
