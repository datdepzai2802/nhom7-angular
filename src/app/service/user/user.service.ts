import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interface/IUser';
import { API } from '../config.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // API = `http://localhost:${apiPort}/users`;
  API = `${API}/users`;

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.API);
  }
  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.API}/${id}`);
  }
  createUser(data: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.API, data);
  }
  updateUser(data: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.API}/${data.id}`, data);
  }
  removeUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this.API}/${id}`);
  }
}
