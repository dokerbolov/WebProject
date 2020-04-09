import { InMemoryDataService } from './InMemoryData.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'
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
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


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
      KidProductDetailComponent,
      ProductAdminComponent,
      LoginComponent,
      RegistrationComponent,
      HeaderComponent,
      HeaderComponent,
      FooterComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,

      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, {dataEncapsulation: false}
      ),
      RouterModule.forRoot([
         {
            path: 'login',
            component: LoginComponent
         },
         {
            path: 'registration',
            component: RegistrationComponent
         }
      ])
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
