import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/servises/product/product.service';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {

  categoryList : any[] = [];
  constructor( private _productService:ProductService ) { }


  ngOnInit(): void {
    this._productService.getAllcategory().subscribe(data =>{
      this.categoryList = data.data
    })
    }


}
