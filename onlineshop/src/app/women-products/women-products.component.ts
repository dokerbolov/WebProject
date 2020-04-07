import { Component, OnInit } from '@angular/core';
import { Category_productService } from './../category_product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Classification } from './../../Classification.enum';
import { Product } from './../../Shop';
import { products } from '../products';

@Component({
  selector: 'app-women-products',
  templateUrl: './women-products.component.html',
  styleUrls: ['./women-products.component.css']
})
export class WomenProductsComponent implements OnInit {

  products: Product[] = [];

  empty():void{
      this.products.length = 0;
  }

  constructor(
    private category_productService: Category_productService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getProductsWomen();
  }

  getProductsWomen():void{
    this.category_productService.getProductsWomen(Classification.WOMEN).subscribe(products => this.products = products);
  }

  goBack(){
    this.empty();
    this.location.back();
  }
}
