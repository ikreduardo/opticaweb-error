import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { IAuth } from './../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endPoint = environment.endpoint
  constructor(private http: HttpClient ) { }

  login(auth: IAuth) {
    //return this.http.post('${this.endPoint}/login', auth);
    return this.http.post<any>(`${this.endPoint}/login`, auth);
  }

  logout() {

  }

  setToken() {

  }
}
