import { Category, Product } from './../Shop';
import { categories } from './Category';
import { products } from './products';
import { Injectable } from '@angular/core';
import { Observable, of, range } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class Category_productService {

  productsMen: Product[] = [];
  productsWomen: Product[] = [];
  productsKid: Product[] = [];

  private productsUrl = 'api/products';

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getProducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.productsUrl)
    .pipe(
      tap(_ => ('fetched heroes')),
      catchError(this.handleError<Product[]>('getProduct', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getProduct(id:number): Observable<Product>
  {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map(products => products[0]),
      tap(h => ('fetched')),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }

  getCategories(): Observable<Category[]>
  {
    return of(categories);
  }

  getProductsMen(id: number): Observable<Product[]>
  {
    this.productsMen.length = 0;
    for(var product of products){
      if(product.category_id === id){
        this.productsMen.push(product);
      }
    }
      return of(this.productsMen);
  }

  getProductsWomen(id: number): Observable<Product[]>
  {
    this.productsWomen.length = 0;
    for(var product of products){
      if(product.category_id === id){
        this.productsWomen.push(product);
      }
    }
      return of(this.productsWomen);
  }

  getProductsKid(id: number): Observable<Product[]>
  {
    this.productsKid.length = 0;
    for(var product of products){
      if(product.category_id === id){
        this.productsKid.push(product);
      }
    }
      return of(this.productsKid);
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.productsUrl, product, this.httpOptions);
  }


}
