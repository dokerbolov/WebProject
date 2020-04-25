import { CartService } from './../Cart.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Shop';
import { Category_productService } from '../category_product.service';
import { ActivatedRoute } from '@angular/router';
import { Prodaction } from 'src/models';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-women-product-detail',
  templateUrl: './women-product-detail.component.html',
  styleUrls: ['./women-product-detail.component.css']
})
export class WomenProductDetailComponent implements OnInit {

  constructor(
    private category_productService: Category_productService,
    private route: ActivatedRoute,
    private location: Location,
    private cartservice: CartService,
    private apiService:ApiService) { }

  product: Product;
  production:Prodaction;

  ngOnInit() {
    this.getProductItem();
  }

  getProduct():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.category_productService.getProduct(id).subscribe(product => this.product = product);
  }

  getProductItem(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getProductItem(id).subscribe(production=>this.production=production);
  }

  goBack(){
    this.location.back();
  }

  addToCard(product: Product):void{
    this.cartservice.addToCard(product);
    window.alert('Product is added');
  }
}
