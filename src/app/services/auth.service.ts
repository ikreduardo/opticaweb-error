import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IAuth } from './../models/auth';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})

  export class AuthService {
    apiURL = environment.apiURL;
    constructor(private http: HttpClient) { }

    register(user: User): Observable<any>{
      return this.http.post(`${this.apiURL}users/register`, user );
    }

    login(iauth: IAuth): Observable<any>{
      return this.http.post(`${this.apiURL}login`, iauth );
    }
  }
/* class AuthService {

  endPoint = environment.endpoint
  constructor(private http: HttpClient ) { }

  login(auth: IAuth) {
    //return this.http.post('${this.endPoint}/login', auth);
    return this.http.post<any>(`${environment.endpoint}/login`, auth);
  }

  logout() {

  }

  setToken() {

  }
}COMMIT PEPE*/
