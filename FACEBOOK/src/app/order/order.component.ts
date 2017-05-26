import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';


@Component({
  selector: 'custom-order',
  templateUrl: '../order/order.component.html'
  
})
export class OrderComponent implements OnInit{
  orderCount:number=0;
    constructor(private productSvc: ProductService) {}
     ngOnInit() {
    this.productSvc.getselectedProduct()
    .subscribe(data=>{
      this.orderCount++;
    })
  }
}