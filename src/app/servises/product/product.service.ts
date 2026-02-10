import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Api_url : string = "/api/BigBasket/"  // also use "amazon"
  constructor( private _http : HttpClient ) { }

  getAllcategory() : Observable <any>{
    return this._http.get(this.Api_url + "GetAllCategory")
  }

  getAllProducts() : Observable<any>{
    return this._http.get(this.Api_url + "GetAllProducts")
  }

  saveProduct(obj  : any) : Observable <any> {
    return this._http.post(this.Api_url + "CreateProduct" , obj)
  }

  updateProduct(obj  : any) : Observable <any> {
    return this._http.post(this.Api_url + "UpdateProduct" , obj)
  }

  deleteProduct(id : any) : Observable <any>{
    return this._http.get(this.Api_url + "DeleteProductById?id=" + id)
  }

  getProductByCategory(id : any) : Observable <any>{
    return this._http.get(this.Api_url + "GetAllProductsByCategoryId?id=" + id)
  }
}
