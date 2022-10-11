import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interface/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API = 'http://localhost:4000/users';
  constructor(private http: HttpClient) {}

  getAllUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.API);
  }
}
