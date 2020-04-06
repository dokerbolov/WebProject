import { products } from './products';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/Shop';

@Injectable({
  providedIn: 'root'
})

export class Category_productService {

  getProducts(): Observable<Product[]>
  {
    return of(products);
  }

  getProduct(id:number): Observable<Product>
  {
    return of(products.find(products => products.id === id));
  }

  constructor() { }

}
