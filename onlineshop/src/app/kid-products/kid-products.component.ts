import { Product } from './../../Shop';
import { products } from './../products';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category_productService } from '../category_product.service';
import { ActivatedRoute } from '@angular/router';
import { Classification } from 'src/Classification.enum';


@Component({
  selector: 'app-kid-products',
  templateUrl: './kid-products.component.html',
  styleUrls: ['./kid-products.component.css']
})
export class KidProductsComponent implements OnInit {

  products: Product[] = [];

  empty():void{
    this.products.length = 0;
  }

  constructor(
    private category_productService: Category_productService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getProductsKid();
  }

  getProductsKid():void{
    this.category_productService.getProductsKid(3).subscribe(products => this.products = products);
  }

  goBack(){
    this.empty();
    this.location.back();
  }

}
