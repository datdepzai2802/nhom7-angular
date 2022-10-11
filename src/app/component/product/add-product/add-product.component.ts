import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onProductCreate(product: {
    pname: String;
    pPrice: number;
    pDescSort: string;
    pDescLong: string;
  }) {
    console.log(product);
  }
}
