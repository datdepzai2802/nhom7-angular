import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/IProducts';
import { ProductService } from 'src/app/service/product/product-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
products: IProduct[] = []
category: any = []
message: string = ""
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(data => {
      this.products = data 
    }, error => {
     this.message = error.message
    })

    this.productService.getAllCategory().subscribe(cate => {
      this.category = cate 
      
      
    }, error => {
     this.message = error.message
    })
  }

}
