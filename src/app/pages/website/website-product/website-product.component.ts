import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/servises/product/product.service';
import Swal from 'sweetalert2';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-website-product',
  templateUrl: './website-product.component.html',
  styleUrls: ['./website-product.component.css']
})
export class WebsiteProductComponent implements OnInit {

  productObj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date,
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": "",
  }

  cart: any = {
    "cartId": 0,
    "custId": 1229,
    "productId": 0,
    "quantity": 0,
    "productShortName": "",
    "addedDate": new Date,
    "productName": "",
    "categoryName": "",
    "productImageUrl": "",
    "productPrice": 0
  }

  products: any[] = [];
  displayProducts: any[] = []
  randomNumbers: number[] = [];
  cartItems: any
  listItems: any

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getproducts()
  }

  getproducts() {
    this._productService.getAllProducts().subscribe(data => {
      this.products = data.data;
      this.displayProducts = this.products.slice(10, 20)
      this.randomNumbers = this.products.map(() => Math.floor(Math.random() * 1000));
    })
  }

  isValidImage(url: string): boolean {
    return !!url && (url.startsWith('http://') || url.startsWith('https://'));
  }

  // getRandom(){
  //   return Math.floor(Math.random()*1000)
  // }

  onAddToCart(cartProduct: any, quantityValue: any) {
    let quantity = +quantityValue;
    this.cartItems = {
      "cartId": 12,
      "custId": 1229,
      "productId": cartProduct.productId,
      "quantity": quantity,
      "productShortName": cartProduct.productShortName,
      "addedDate": new Date,
      "productName": cartProduct.productName,
      "categoryName": cartProduct.categoryId,
      "productImageUrl": cartProduct.productImageUrl,
      "productPrice": (cartProduct.productPrice) * quantity
    }

    let currentCart = sessionStorage.getItem('cartItems');
    let cartArray = currentCart ? JSON.parse(currentCart) : [];


    const index = cartArray.findIndex((item: any) => item.productId === this.cartItems.productId);

    if (index > -1) {
      cartArray[index].quantity += quantity;
      cartArray[index].productPrice += this.cartItems.productPrice;
    } else {
      cartArray.push(this.cartItems);
    }

    sessionStorage.setItem('cartItems', JSON.stringify(cartArray));

  }

  onWishlist(product : any){
    this.listItems = {
      "productId": product.productId,
      "productShortName": product.productShortName,
      "addedDate": new Date,
      "productName": product.productName,
      "categoryName": product.categoryId,
      "productImageUrl": product.productImageUrl,
      "productPrice": product.productPrice
    }

    let currentwish = localStorage.getItem('wishlist');
    let wishArray = currentwish ? JSON.parse(currentwish) : [];

    const index = wishArray.findIndex((item: any) => item.productId === this.listItems.productId);
    
    if (index > -1) {
      Swal.fire({
        title : "Organic",
        text : "Allready item present in wishlist.",
        icon : "warning"
      })
    } else {
      wishArray.push(this.listItems);
    }

    localStorage.setItem('wishlist', JSON.stringify(wishArray));


  }

}
