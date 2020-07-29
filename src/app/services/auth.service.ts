import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endPoint = environment.endpoint

  constructor(private http: HttpClient ) { }

  login() {
    //return this.http.post()
  }

  logout() {

  }

  setToken() {

  }
}
