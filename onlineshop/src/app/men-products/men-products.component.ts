import { Classification } from './../../Classification.enum';
import { Product } from './../../Shop';
import { Component, OnInit } from '@angular/core';
import { Category_productService } from './../category_product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { products } from '../products';

@Component({
  selector: 'app-men-products',
  templateUrl: './men-products.component.html',
  styleUrls: ['./men-products.component.css']
})
export class MenProductsComponent implements OnInit {

  products: Product[] = [];

  empty():void{
      this.products.length = 0;
  }

  constructor(
    private category_productService: Category_productService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getProductsMen();
  }

  getProductsMen():void{
    this.category_productService.getProductsMen(1).subscribe(products => this.products = products);
  }

  goBack(){
    this.empty();
    this.location.back();
  }
}
