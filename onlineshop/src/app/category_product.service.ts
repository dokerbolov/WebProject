import { Classification } from './../Classification.enum';
import { Category, Product } from './../Shop';
import { categories } from './Category';
import { products } from './products';
import { Injectable } from '@angular/core';
import { Observable, of, range } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Category_productService {

  productsMen: Product[] = [];
  productsWomen: Product[] = [];
  productsKid: Product[] = [];

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

  constructor() { }

}
