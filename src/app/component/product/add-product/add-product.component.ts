import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategories } from 'src/app/interface/categories';
import { IProduct } from 'src/app/interface/IProducts';
import { CategoryService } from 'src/app/service/categories/category.service';
import { ProductService } from 'src/app/service/product/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  categorys: ICategories[] = [];
  CategoryId!: number;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCatetegory();
  }

  getCatetegory() {
    this.categoryService
      .getAllCategory()
      .subscribe((dataCate) => (this.categorys = dataCate));
  }

  onSelect(e: any) {
    this.CategoryId = e.value;
  }

  onProductCreate(product: IProduct) {
    product.id_categories = this.CategoryId;
    var pointNum = parseInt(product.price);
    product.price = pointNum;
    product.urlImage =
      'https://salt.tikicdn.com/cache/750x750/ts/product/65/89/c7/66b73e67009e0af7204efb3c06d94590.jpg.webp';
    this.productService.createProduct(product).subscribe(() => {
      alert('Create Product SuccessFully!!!');
      this.router.navigateByUrl('/admin/product');
    });
  }
}
