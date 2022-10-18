import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategories } from 'src/app/interface/categories';
import { IProduct } from 'src/app/interface/IProducts';
import { API } from '../config.service';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  // API = `http://localhost:${apiPort}/categories`;
  API = `${API}/categories`;
  constructor(private http: HttpClient) {}

  getAllCategory(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(this.API);
  }
}
