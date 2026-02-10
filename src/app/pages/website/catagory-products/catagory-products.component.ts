import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { Navigation } from 'swiper';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation'; 
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-catagory-products',
  templateUrl: './catagory-products.component.html',
  styleUrls: ['./catagory-products.component.css']
})
export class CatagoryProductsComponent implements OnInit , AfterViewInit {

  constructor( private _route : Router ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    new Swiper('.category-carousel', {
      slidesPerView: 6,
      spaceBetween: 20,
      navigation: {
        nextEl: '.category-carousel-next',
        prevEl: '.category-carousel-prev',
      },
      breakpoints: {
        0: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
        1200: { slidesPerView: 6 },
      }
    });
  }

  getCategoryProfuct(id : any){
    this._route.navigate(['product' , id])
  }

}
