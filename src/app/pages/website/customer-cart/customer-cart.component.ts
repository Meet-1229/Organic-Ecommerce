import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css']
})
export class CustomerCartComponent implements OnInit {

  constructor( private _route : Router ) { }
  cart: any[] = [];
  randomNumbers: number[] = [];
  isEmpty : any = true
  
  ngOnInit(): void {
    const cartData = sessionStorage.getItem('cartItems');
    this.cart = cartData ? JSON.parse(cartData) : [];
    console.log(this.cart);
    this.randomNumbers = this.cart.map(() => Math.floor(Math.random() * 1000));
    this.isEmpty = this.cart.length ===0
    if(this.isEmpty){
      Swal.fire({
        title : "Order",
        text : "No item present in cart",
        icon : "warning"
      })
      this._route.navigate(['shop'])
    }
  }

  isValidImage(url: string): boolean {
    return !!url && (url.startsWith('http://') || url.startsWith('https://'));
  }
  
  onRemove(id : any){
    this.cart = this.cart.filter(item => item.productId !== id);
    sessionStorage.setItem("cartItems" , JSON.stringify(this.cart))
    this.isEmpty = this.cart.length === 0;
    if(this.isEmpty){
      Swal.fire({
        title : "Order",
        text : "No item present in cart",
        icon : "warning"
      })
      this._route.navigate(['shop'])
    }
  }
  onOrderPlace(id : any){
    Swal.fire({
      title : "Order",
      text : "Order Placed Successfully",
      icon : "success"
    }).then(()=>{
      this.onRemove(id)
    })
  }
}

