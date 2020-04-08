import { WomenProductsComponent } from './women-products/women-products.component';
import { KidProductsComponent } from './kid-products/kid-products.component';
import { MenProductsComponent } from './men-products/men-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './Products/Products.component';
import { ProductsDetailComponent } from './ProductsDetail/ProductsDetail.component';
import { MenProductDetailComponent } from './men-product-detail/men-product-detail.component';
import { WomenProductDetailComponent } from './women-product-detail/women-product-detail.component';
import { KidProductDetailComponent } from './kid-product-detail/kid-product-detail.component';



const routes: Routes = [
  {path: ``, redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductsDetailComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/Men/products', component: MenProductsComponent},
  {path: 'categories/Men/products/:id', component: MenProductDetailComponent},
  {path: 'categories/Women/products', component: WomenProductsComponent},
  {path: 'categories/Women/products/:id', component: WomenProductDetailComponent},
  {path: 'categories/Kid/products', component: KidProductsComponent},
  {path: 'categories/Kid/products/:id', component: KidProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
