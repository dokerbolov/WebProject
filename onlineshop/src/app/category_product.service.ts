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

  getProductsMen(classification: Classification.MEN): Observable<Product[]>
  {
    for(var product of products){
      if(product.classification === classification){
        this.productsMen.push(product);
      }
    }
      return of(this.productsMen);
  }

  getProductsWomen(classification: Classification.WOMEN): Observable<Product[]>
  {
    for(var product of products){
      if(product.classification === classification){
        this.productsWomen.push(product);
      }
    }
      return of(this.productsWomen);
  }

  getProductsKid(classification: Classification.KID): Observable<Product[]>
  {
    for(var product of products){
      if(product.classification === classification){
        this.productsKid.push(product);
      }
    }
      return of(this.productsKid);
  }

  constructor() { }

}
