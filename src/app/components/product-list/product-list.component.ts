import { Component, Input } from '@angular/core';
import { IProduct } from '../../../interfaces/Product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductAddComponent } from '../product-add/product-add.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailComponent, ProductAddComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  @Input() products!: IProduct[];
  selectedProduct!: IProduct;

  setProduct(product: IProduct) {
    this.selectedProduct = product;
  }
}
