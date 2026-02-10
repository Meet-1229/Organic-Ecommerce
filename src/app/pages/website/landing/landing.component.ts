import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/servises/product/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  categoryList: any[] = [];
  isLoading = true;
  constructor(private _productService: ProductService, private _route: Router) { }

  ngOnInit(): void {
    this.getCategory();
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  getCategory() {
    this._productService.getAllcategory().subscribe(data => {
      this.categoryList = data.data
    })
  }

  getCategoryProfuct(id: any) {
    this._route.navigate(['product', id])
  }

  onContact() {
    Swal.fire({
      title: 'Organic',
      text: 'Enter your email.',
      icon: 'info',
      input: 'email',
      inputPlaceholder: 'Enter your email',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      preConfirm: (email) => {
        if (!email) {
          Swal.showValidationMessage('Email is required');
        }
        return email;
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Organic',
          text: 'We will contact you shortly.',
          icon: 'success'
        });
      }
    });
  }

  onThank(){
    Swal.fire({
      title : "Organic",
      text : "Thank you to visit our website.",
      icon : "success",
      timer : 3000
    })
  }

  onAbout(){
    Swal.fire({
      title : "Organic",
      text : "Made By Meet Patel.",
      icon : "success",
      timer : 3000
    })
  }

}
