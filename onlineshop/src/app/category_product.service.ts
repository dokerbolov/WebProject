import { Category } from './../Shop';
import { categories } from './Category';
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
    return of(products.find(product => product.id === id));
  }

  getCategories(): Observable<Category[]>
  {
    return of(categories);
  }

  constructor() { }

}
