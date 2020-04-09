import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category_productService } from '../category_product.service';
import { Product } from 'src/Shop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  products: Product[] = [];
  selectedProduct: Product;

  constructor(
    private category_productService: Category_productService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }

  getProducts():void{
    this.category_productService.getProducts().subscribe(products => this.products = products);
  }

  deleteProduct(product: Product):void{
    this.products = this.products.filter(p => p !== product);
    this.category_productService.deleteProduct(product).subscribe();
  }
}
