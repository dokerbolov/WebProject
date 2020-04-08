import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Products/Products.component';
import { ProductsDetailComponent } from './ProductsDetail/ProductsDetail.component';
import { CategoriesComponent } from './categories/categories.component';
import { MenProductsComponent } from './men-products/men-products.component';
import { KidProductsComponent } from './kid-products/kid-products.component';
import { WomenProductsComponent } from './women-products/women-products.component';
import { MenProductDetailComponent } from './men-product-detail/men-product-detail.component';
import { WomenProductDetailComponent } from './women-product-detail/women-product-detail.component';
import { KidProductDetailComponent } from './kid-product-detail/kid-product-detail.component';


@NgModule({
   declarations: [
      AppComponent,
      ProductsComponent,
      ProductsDetailComponent,
      CategoriesComponent,
      MenProductsComponent,
      KidProductsComponent,
      WomenProductsComponent,
      MenProductDetailComponent,
      WomenProductDetailComponent,
      KidProductDetailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
