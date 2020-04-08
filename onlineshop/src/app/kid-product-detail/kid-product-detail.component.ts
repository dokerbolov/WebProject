import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category_productService } from '../category_product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/Shop';

@Component({
  selector: 'app-kid-product-detail',
  templateUrl: './kid-product-detail.component.html',
  styleUrls: ['./kid-product-detail.component.css']
})
export class KidProductDetailComponent implements OnInit {

  constructor(
    private category_productService: Category_productService,
    private route: ActivatedRoute,
    private location: Location) { }

  product: Product;

  ngOnInit() {
    this.getProduct();
  }

  getProduct():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.category_productService.getProduct(id).subscribe(product => this.product = product);
  }

  goBack(){
    this.location.back();
  }

}
