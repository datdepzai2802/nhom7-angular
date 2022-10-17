import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product/product-service.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  product = {
    name: "", urlImage: "", price: 0, descSort: "", descLong: "", star: 0
  }
  constructor(private ProductService: ProductService,
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(param => {
      const id = param['id'];
      if (param) {
        this.ProductService.getProduct(id).subscribe(item => {
          this.product = item;
        })
      }
    })
  }

}
