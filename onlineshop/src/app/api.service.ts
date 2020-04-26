import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prodaction, Company, LoginResponse, UserId } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http: HttpClient) { }

  getProductsList(): Observable<Prodaction[]>{
    return this.http.get<Prodaction[]>("http://127.0.0.1:8000/api/products/");
  }

  getCompaniesList(): Observable<Company[]>{
    return this.http.get<Company[]>("http://127.0.0.1:8000/api/companies/");
  }

  getProductItem(id):Observable<Prodaction>{
    return this.http.get<Prodaction>(`http://127.0.0.1:8000/api/products/${id}`);
  }
  getProductsWomen():Observable<Prodaction[]>{
    return this.http.get<Prodaction[]>("http://127.0.0.1:8000/api/products/women/");
  }
  getProductsKids():Observable<Prodaction[]>{
    return this.http.get<Prodaction[]>("http://127.0.0.1:8000/api/products/kids/");
  }
  getProductsMen():Observable<Prodaction[]>{
    return this.http.get<Prodaction[]>("http://127.0.0.1:8000/api/products/men/");
  }
  registerNewUser(username,password):Observable<any>{
    return this.http.post<any>("http://127.0.0.1:8000/api/users/",{username,password});
  }
  loginUser(username,password):Observable<LoginResponse>{
    return this.http.post<LoginResponse>("http://127.0.0.1:8000/api/auth/",{username,password});
  }
  getUserId(username):Observable<UserId>{
    return this.http.get<UserId>(`http://127.0.0.1:8000/api/users/${username}/`);
  }


}
