import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategories } from 'src/app/interface/categories';
import { IProduct } from 'src/app/interface/IProducts';
import { CategoryService } from 'src/app/service/categories/category.service';
import { ProductService } from 'src/app/service/product/product-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  categorys: ICategories[] = [];
  CategoryId!: number;
  product!: IProduct;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private activatelRouetr: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCatetegory();
    this.getProduct();
    console.log(this.product);

    // this.CategoryId = this.product.;
  }

  getProduct() {
    this.activatelRouetr.params.subscribe((params) => {
      const id = params['id'];
      console.log(id);

      if (params) {
        this.productService
          .getProduct(id)
          .subscribe((item) => (this.product = item));
      }
    });
  }

  getCatetegory() {
    this.categoryService
      .getAllCategory()
      .subscribe((dataCate) => (this.categorys = dataCate));
  }

  onSelect(e: any) {
    this.product.id_categories = parseInt(e.value);
  }

  onProductEdit() {
    this.productService.updateProduct(this.product).subscribe(() => {
      alert('Update Product SuccessFully!!!');
      this.router.navigateByUrl('/admin/product');
    });
  }
}
