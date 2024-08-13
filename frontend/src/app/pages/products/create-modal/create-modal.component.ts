import { Component } from '@angular/core';
import { ProductService } from '../../../core/api/services';
import { FormsModule } from '@angular/forms';
import { CreateProductRequest } from '../../../core/api/models';

@Component({
  selector: 'app-create-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-modal.component.html',
  styleUrl: './create-modal.component.css',
})

export default class CreateModalComponent {
  product: Product;

  constructor(private productService: ProductService) {
    this.product = { id: 0, name: "", price: 0 };
  }

  createProduct(): void {
    this.productService
      .apiV1ProductPost$Json({ body: this.product })
      .subscribe({
        next: (value: CreateProductRequest) => {
          //       this.products?.push(value)
          this.product = { name: "", price: 0 };
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
