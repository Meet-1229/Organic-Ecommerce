import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubscribe(){
    Swal.fire({
      title : "Organic",
      text : "Contect you in short time",
      icon : "success"
    })
  }

  OnbtnClick(){
    Swal.fire({
      title : "Organic",
      text : "Thank You to support us.",
      icon : "success"
    })
  }

}
