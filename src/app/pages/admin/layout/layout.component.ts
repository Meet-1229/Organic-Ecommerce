import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor( private _route : Router ) { }

  ngOnInit(): void {
  }

  onLogout(){
    Swal.fire({
      title : "Logout",
      text : "Are you sure to logout?",
      icon : "warning",
      showCancelButton : true,
      confirmButtonText : "Yes",
      cancelButtonText : "No"
    }).then((result)=> {
      if(result.value) {
        this._route.navigate(['/shop'])
        Swal.fire({
          title : "Logout",
          text : "Logout successfully..",
          icon : "success"
        })
      }else {
        Swal.fire({
          title : "Logout!",
          text : "Logout request is cancel..",
          icon : "error"
        })
      }
    })
  }

}
