import { WomenProductsComponent } from './women-products/women-products.component';
import { KidProductsComponent } from './kid-products/kid-products.component';
import { MenProductsComponent } from './men-products/men-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './Products/Products.component';
import { ProductsDetailComponent } from './ProductsDetail/ProductsDetail.component';



const routes: Routes = [
  {path: ``, redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductsDetailComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/Men/products', component: MenProductsComponent},
  {path: 'categories/Women/products', component: WomenProductsComponent},
  {path: 'categories/Kid/products', component: KidProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
