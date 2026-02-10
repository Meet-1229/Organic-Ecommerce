import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/servises/product/product.service';

@Component({
  selector: 'app-categorial-product',
  templateUrl: './categorial-product.component.html',
  styleUrls: ['./categorial-product.component.css']
})
export class CategorialProductComponent implements OnInit {
  catedoryId: any;
  products: any[] = []
  randomNumbers: number[] = [];
  constructor(private _activatedroute: ActivatedRoute, private _productService: ProductService) { }

  ngOnInit(): void {
    this._activatedroute.params.subscribe(data => {
      this.catedoryId = data['id'];
      console.log(this.catedoryId)
      this.getProducts(this.catedoryId)
    });

  }

  getCatedory() {
    
  }

  getProducts(catedoryId : any) {
    this._productService.getProductByCategory(catedoryId).subscribe(data => {
      this.products = data.data;
      this.randomNumbers = this.products.map(() => Math.floor(Math.random() * 1000));
    })
  }

  isValidImage(url: string): boolean {
    return !!url && (url.startsWith('http://') || url.startsWith('https://'));
  }


}
