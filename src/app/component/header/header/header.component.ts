import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interface/IProducts';
import { IUser } from 'src/app/interface/IUser';
import { ProductService } from 'src/app/service/product/product-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit {
  


 product: IProduct[] = [];
  user!: IUser;
  constructor(private router: Router,
    private productService: ProductService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }
 

  outUser() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/signin');
  }

  searchByName(value: string) {
    this.productService.searchByName(value).subscribe(data => {
      this.product = data
      console.log("header", data);
       
    })
  }
  
  
}
