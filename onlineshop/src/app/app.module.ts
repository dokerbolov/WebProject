import { InMemoryDataService } from './InMemoryData.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Products/Products.component';
import { ProductsDetailComponent } from './ProductsDetail/ProductsDetail.component';
import { CategoriesComponent } from './categories/categories.component';
import { MenProductsComponent } from './men-products/men-products.component';
import { KidProductsComponent } from './kid-products/kid-products.component';
<<<<<<< HEAD
import { WomenProductsComponent } from './women-products/women-products.component';
import { MenProductDetailComponent } from './men-product-detail/men-product-detail.component';
import { WomenProductDetailComponent } from './women-product-detail/women-product-detail.component';
import { KidProductDetailComponent } from './kid-product-detail/kid-product-detail.component';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
=======
import { HeaderComponent } from './header/header.component';
>>>>>>> 31ce06fd9ff6dfe73ed8e0968977a8d5f1b9607b


@NgModule({
   declarations: [
      AppComponent,
      ProductsComponent,
      ProductsDetailComponent,
      CategoriesComponent,
      MenProductsComponent,
      KidProductsComponent,
<<<<<<< HEAD
      WomenProductsComponent,
      MenProductDetailComponent,
      WomenProductDetailComponent,
      KidProductDetailComponent,
      ProductAdminComponent,
=======
      HeaderComponent
>>>>>>> 31ce06fd9ff6dfe73ed8e0968977a8d5f1b9607b
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,

      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, {dataEncapsulation: false}
      )
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
