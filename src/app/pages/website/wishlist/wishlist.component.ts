import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor( private _route:Router ) { }

  wishdata: any[] = [];
  isEmpty: any = true
  randomNumbers: number[] = [];

  ngOnInit(): void {
    const wish = localStorage.getItem('wishlist');
    this.wishdata = wish ? JSON.parse(wish) : [];
    this.randomNumbers = this.wishdata.map(() => Math.floor(Math.random() * 1000));
    this.isEmpty = this.wishdata.length === 0
    if (this.isEmpty) {
      Swal.fire({
        title: "Wishlist",
        text: "No item present in wishdata",
        icon: "warning"
      })
      this._route.navigate(['shop'])
    }
  }

  isValidImage(url: string): boolean {
    return !!url && (url.startsWith('http://') || url.startsWith('https://'));
  }

  onRemove(id: any) {
    this.wishdata = this.wishdata.filter(item => item.productId !== id);
    localStorage.setItem("wishlist", JSON.stringify(this.wishdata))
    this.isEmpty = this.wishdata.length === 0;
    if (this.isEmpty) {
      Swal.fire({
        title: "Wishlist",
        text: "No item present in wishlist",
        icon: "warning"
      })
      this._route.navigate(['shop'])
    }
  }
  onOrderPlace(id: any) {
    Swal.fire({
      title: "Order",
      text: "Order Placed Successfully",
      icon: "success"
    }).then(()=>{
      this.onRemove(id)
    })
  }

}
