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
  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.ProductService.getAllProduct().subscribe(
      (data) => (this.products = data)
    );

    console.log(this.products, 'alo');
  }
}
