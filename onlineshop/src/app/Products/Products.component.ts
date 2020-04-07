import { Category_productService } from './../category_product.service';
import { Product } from 'src/Shop';
import { products } from './../products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  selectedProduct: Product;

  constructor(private category_productService: Category_productService) { }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }

  getProducts():void{
    this.category_productService.getProducts().subscribe(products => this.products = products);
  }

}
