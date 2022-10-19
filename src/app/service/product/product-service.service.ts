import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interface/IProducts';
import { API } from '../config.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // API = `http://localhost:${apiPort}/products`;
  API = `${API}/products`;

  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API);
  }
  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API}/${id}`);
  }
  createProduct(data: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.API, data);
  }
  updateProduct(data: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.API}/${data.id}`, data);
  }
  removeProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API}/${id}`);
  }
  searchByName(data: any): Observable<any> {
    return this.http.get<any>(`${this.API + '?name_like=' + data}`);
  }
}
