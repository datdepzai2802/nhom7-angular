import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategories } from 'src/app/interface/categories';
import { apiPort } from '../config.service';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  API = `http://localhost:${apiPort}/categories`;
  constructor(private http: HttpClient) {}

  getAllCategory(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(this.API);
  }
}
