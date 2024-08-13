import { Component, Input } from '@angular/core';
import { ChangeNameRequest, ChangePriceRequest, GetProductResponse } from '../../../core/api/models';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../core/api/services';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css'
})

export class EditModalComponent {
  @Input() ProductId: number | undefined;
  @Input() Product: GetProductResponse | undefined;
  isInputProductNameDisabled: boolean = true;
  isInputProductPriceDisabled: boolean = true;

  constructor(private productService: ProductService) {

  }

  editProductName(): void {
    if (this.isInputProductNameDisabled) {
      this.isInputProductNameDisabled = false
      return;
    }
    this.changeName();
    this.isInputProductNameDisabled = true
  }

  changeName(): void {
    this.productService
      .apiV1ProductProductIdChangeNamePatch$Json({
        productId: this.Product!.id!,
        body: {
          productId: this.Product!.id!,
          name: this.Product!.name
        }
      })
      .subscribe({
        next: (value: ChangeNameRequest) => {
          this.Product = value
        },
        error: (error: Error) => {
          console.log(error);
        }
      });
  }

  editProductPrice(): void {
    if (this.isInputProductPriceDisabled) {
      this.isInputProductPriceDisabled = false
      return;
    }
    this.changePrice();
    this.isInputProductPriceDisabled = true
  }

  changePrice(): void {
    this.productService
      .apiV1ProductProductIdChangePricePatch$Json({
        productId: this.Product!.id!,
        body: {
          productId: this.Product!.id!,
          price: this.Product!.price
        }
      })
      .subscribe({
        next: (value: ChangePriceRequest) => {
          this.Product = value
        },
        error: (error: Error) => {
          console.log(error);
        }
      });
  }

}
