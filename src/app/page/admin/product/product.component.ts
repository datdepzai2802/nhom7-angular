import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/IProducts';
import { ProductService } from 'src/app/service/product/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];

  popoverTitle = 'Xoá Sản Phẩm';
  popoverMessage = 'Bạn chắc muốn xóa sản phẩm này!!!';
  confirmClicked = false;
  cancelClicked = false;

  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.ProductService.getAllProduct().subscribe(
      (data) => (this.products = data)
    );
  }

  removeProduct(id: number) {
    this.ProductService.removeProduct(id).subscribe(
      (data) =>
        (this.products = this.products.filter((product) => product.id !== id))
    );
  }
}
