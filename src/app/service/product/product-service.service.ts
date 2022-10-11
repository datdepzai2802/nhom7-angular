import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interface/IProducts';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API = 'http://localhost:4000/products';
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API);
  }
}
