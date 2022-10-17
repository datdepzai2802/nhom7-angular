import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/IProducts';
import { CategoryService } from 'src/app/service/categories/category.service';
import { ProductService } from 'src/app/service/product/product-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  products: IProduct[] = [];
  category: any = [];
  message: string = '';
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        this.message = error.message;
      }
    );

    this.categoryService.getAllCategory().subscribe(
      (cate) => {
        this.category = cate;
      },
      (error) => {
        this.message = error.message;
      }
    );
  }
}
