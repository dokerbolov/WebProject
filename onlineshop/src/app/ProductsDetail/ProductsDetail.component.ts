import { CartService } from './../Cart.service';
import { Product } from './../../Shop';
import { Category_productService } from './../category_product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Prodaction } from 'src/models';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ProductsDetail',
  templateUrl: './ProductsDetail.component.html',
  styleUrls: ['./ProductsDetail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  constructor(
    private category_productService: Category_productService,
    private route: ActivatedRoute,
    private location: Location,
    private cartservice: CartService,
    private apiService: ApiService
  ) { }

  product: Product;
  production:Prodaction;

  ngOnInit() {
    this.getProductItem();
  }

  getProduct():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.category_productService.getProduct(id).subscribe(product => this.product = product);
  }

  goBack(){
    this.location.back();
  }

  getProductItem(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getProductItem(id).subscribe(production=>this.production=production);
  }

  addToCard(product: Product):void{
    this.cartservice.addToCard(product);
    window.alert('Product is added');
  }

}
