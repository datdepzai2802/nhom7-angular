import { Component, OnInit, Input } from '@angular/core';
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
  

  filteredProducts: IProduct[] = [];
  categories: any = [];
  message: string = '';
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getProduct();

    this.categoryService.getAllCategory().subscribe(
      (cate) => {
        this.categories = cate;
      },
      (error) => {
        this.message = error.message;
      }
    );
    
  }

  getProduct() {
    
    this.productService.getAllProduct().subscribe(
      (data) => {
        this.products = data;
        this.filteredProducts = this.products;
        console.log(this.products);
      },
      (error) => {
        this.message = error.message;
      }
    );
  }
 
  

  handleClickCategories(id: any) {
    switch (id) {
      case this.categories[0].id:
        this.filteredProducts = this.products.filter((item: any) => {
          return item.id_categories === id;
        });
        break;

      case this.categories[1].id:
        this.filteredProducts = this.products.filter((item: any) => {
          return item.id_categories === id;
        });
        break;

      case this.categories[2].id:
        this.filteredProducts = this.products.filter((item: any) => {
          return item.id_categories === id;
        });
        break;

      case this.categories[3].id:
        this.filteredProducts = this.products.filter((item: any) => {
          return item.id_categories === id;
        });
        break;
      default:
        this.filteredProducts = this.products;
        break;
    }
  }

}
