import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interface/IUser';
import { API } from '../config.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // API = `http://localhost:${apiPort}/users`;
  API = `${API}/users`;
  constructor(private http: HttpClient) {}

  sigup(data: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.API, data);
  }

  getAll(data: IUser): Observable<IUser> {
    return this.http.get<IUser>(this.API);
  }
}
