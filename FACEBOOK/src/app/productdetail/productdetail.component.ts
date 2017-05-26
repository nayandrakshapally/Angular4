import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
@Input()
productDetails: any;

  constructor(private productSvc:ProductService) {

  }
    
  selectedProduct: any;

  ngOnInit() {
  }


}
