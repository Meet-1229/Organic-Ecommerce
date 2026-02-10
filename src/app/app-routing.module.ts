import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CatagoriesComponent } from './pages/admin/catagories/catagories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { FrontloookComponent } from './pages/website/landing/frontloook/frontloook.component';
import { CategorialProductComponent } from './pages/website/categorial-product/categorial-product.component';
import { AllProductsComponent } from './pages/website/all-products/all-products.component';
import { CustomerCartComponent } from './pages/website/customer-cart/customer-cart.component';
import { WishlistComponent } from './pages/website/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: "shop", pathMatch: "full" },
  { path: "login", component: LoginComponent },

  {
    path: '', component: LayoutComponent, children: [{
      path: 'product',
      component: ProductsComponent
    },
    {
      path: 'category', component: CatagoriesComponent
    }]
  },
  {
    path: "", component: LandingComponent, children: [{
      path: "shop", component: FrontloookComponent
    },
    { path: "product/:id", component: CategorialProductComponent },
    { path: "allproduct", component: AllProductsComponent },
    { path: "cart", component: CustomerCartComponent },
    { path: "wishlist" , component:WishlistComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
