import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/servises/product/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  isSidePanelVisible : boolean = false

  productObj : any = {
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

  category : any[] = [];
  products : any[] = []
  constructor( private _productService : ProductService ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategory();
  }

  onSave(){
    return this._productService.saveProduct(this.productObj).subscribe(data=>{
      if(data.result){
        Swal.fire({
          title : "Product",
          text : "Product make successfully",
          icon : "success"
        })
        this.getProducts()
      } else {
        Swal.fire({
          title : "Product",
          text : "Some Error occur",
          icon : "error" 
        })
      }
    })
  }

  getCategory(){
    this._productService.getAllcategory().subscribe(data => {
      this.category = data.data
    })
  }

  getProducts(){
    this._productService.getAllProducts().subscribe(data =>{
      this.products = data.data
    })
  }

  onUpdate(){
    return this._productService.updateProduct(this.productObj).subscribe(data=>{
      if(data.result){
        Swal.fire({
          title : "Product",
          text : "Product updated successfully",
          icon : "success"
        })
        this.getProducts()
      } else {
        Swal.fire({
          title : "Product",
          text : "Some Error occur",
          icon : "error" 
        })
      }
    })
  }

  onDelete(item : any){
    Swal.fire({
      title : "Are you sure ? ",
      text : "You will not be able to recover this data.",
      icon : "warning",
      showCancelButton : true,
      confirmButtonText : "Yes , delete it!",
      cancelButtonText : "No , keep it"
    }).then((result)=> {
      if(result.value) {
        this._productService.deleteProduct(item.productId).subscribe(data => {
          this.getProducts();
        })
        Swal.fire({
          title : "Deleted!",
          text : "Data deleted successfully..",
          icon : "success"
        })
      }else {
        Swal.fire({
          title : "Canceled!",
          text : "Your data is safe..",
          icon : "error"
        })
      }
    })

  }

  onEdit(item : any){
    this.productObj = item;
    this.openSidePanel()
  }

  openSidePanel(){
    this.isSidePanelVisible = true
  }

  closeSidePanel(){
    this.isSidePanelVisible = false
  }

  isValidImage(url: string): boolean {
  return !!url && (url.startsWith('http://') || url.startsWith('https://'));
}


}
