import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/products';
import { DetailSaleService } from 'src/app/services/detail-sale.service';

@Component({
  selector: 'app-detail-sale',
  templateUrl: './detail-sale.component.html',
  styleUrls: ['./detail-sale.component.sass']
})
export class DetailSaleComponent implements OnInit {

  id = '123AD';
  productsDetail: Product[] = [];
  totalSum = 0;

  constructor(public card: DetailSaleService) { }

  ngOnInit(): void {
    this.card.getProductSale().subscribe(item => {
      console.log(item);
      this.productsDetail = item;
      this.updateTotal();
    });
  }

  delete(product: Product): void {
    const index = this.productsDetail.findIndex(p => p._id === product._id);
    if (index !== -1) {
      this.totalSum -= this.productsDetail[index].price;
      this.productsDetail.splice(index, 1);
      this.card.deleteProductSale(product._id);
    }
  }

  updateTotal(): void {
    this.totalSum = this.productsDetail.reduce((suma, variable) => suma + variable.price, 0);
  }
}
