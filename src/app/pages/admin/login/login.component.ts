import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;

  constructor(private _fb: FormBuilder , private _route : Router) { }

  ngOnInit(): void {
    
   this.loginForm = this._fb.group({
      userName : ['' , Validators.required],
      password : ['' , Validators.required]
    })

  }

  onSubmit(){
    if(this.loginForm.controls['userName'].value == "Admin" && this.loginForm.controls['password'].value== "admin@123"){
      this._route.navigateByUrl('product')
    }else{
      Swal.fire({
        title: "Login",
        text : "Wrong Data field",
        icon : "error"
      })
    }
  }

}
