import { Component } from '@angular/core';
import { Product } from 'src/app/model/products';
import { sales } from 'src/app/model/sales';
import { DetailSaleService } from 'src/app/services/detail-sale.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.sass']
})
export class SalesListComponent {
  [x: string]: any;
  salesList: sales[] = [
    { id: 1, name: 'Producto 1', price: 100, imageUrl: 'assets/product1.jpg' },
    { id: 2, name: 'Producto 2', price: 150, imageUrl: 'assets/product2.jpg' },
    { id: 3, name: 'Producto 3', price: 200, imageUrl: 'assets/product3.jpg' },
  ];
  constructor(private detail:DetailSaleService){

  }

  addProduct(product:Product){
    this['card'].addProductSale(product);
  }

  addToCart(sale: any) {
   this.detail.addProductSale(sale)
  }

  
  delete(product:any){
    this['card'].deleteProductSale(product._id)
  }

  
}
    
