import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];

  constructor(
    private _productService: ProductsService,
  ){}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this._productService.getAllSimple()
    .subscribe(products => {
      this.products = products;
    });
  }
}
