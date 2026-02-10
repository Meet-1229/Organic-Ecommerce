import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/servises/product/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

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
  
    products : any[] = [];
    randomNumbers: number[] = [];
    cartItems : any
    constructor( private _productService:ProductService ) { }
  
    ngOnInit(): void {
      this.getproducts()
    }
  
    getproducts(){
      this._productService.getAllProducts().subscribe(data =>{
        this.products = data.data;
        this.randomNumbers = this.products.map(() => Math.floor(Math.random() * 1000));
      })
    }
  
    isValidImage(url: string): boolean {
    return !!url && (url.startsWith('http://') || url.startsWith('https://'));
  }

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

}
