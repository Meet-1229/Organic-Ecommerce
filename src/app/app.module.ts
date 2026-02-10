import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { CatagoriesComponent } from './pages/admin/catagories/catagories.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CatagoryProductsComponent } from './pages/website/catagory-products/catagory-products.component';
import { CustomerCartComponent } from './pages/website/customer-cart/customer-cart.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { FrontloookComponent } from './pages/website/landing/frontloook/frontloook.component';
import { WebsiteProductComponent } from './pages/website/website-product/website-product.component';
import { CategorialProductComponent } from './pages/website/categorial-product/categorial-product.component';
import { AllProductsComponent } from './pages/website/all-products/all-products.component';
import { MiddlelookComponent } from './pages/website/middlelook/middlelook.component';
import { FooterComponent } from './pages/website/footer/footer.component';
import { WishlistComponent } from './pages/website/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatagoriesComponent,
    LayoutComponent,
    ProductsComponent,
    CatagoryProductsComponent,
    CustomerCartComponent,
    LandingComponent,
    FrontloookComponent,
    WebsiteProductComponent,
    CategorialProductComponent,
    AllProductsComponent,
    MiddlelookComponent,
    FooterComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
