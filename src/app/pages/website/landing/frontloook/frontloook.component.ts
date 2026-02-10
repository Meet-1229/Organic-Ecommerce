import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-frontloook',
  templateUrl: './frontloook.component.html',
  styleUrls: ['./frontloook.component.css']
})
export class FrontloookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onJoin(){
    Swal.fire({
      title : "Organic",
      text : "Sucessfully join in our group.",
      icon : "success",
      timer : 3000
    })
  }
}
