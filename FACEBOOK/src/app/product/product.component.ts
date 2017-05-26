import { Component } from '@angular/core';
import { product } from './product';
import { Products } from "./product.data";
import {ProductService} from '../service/product.service';
@Component({
    
    selector: 'app-product',
    templateUrl: './product.component.html'
    
})
export class ProductComponent {

    constructor(private productSvc:ProductService) {
        
    }
    search:String;
    products: Array<product>;
    orders:Array<product> = new Array<product>();
    selectedProduct: any;

    selectProduct(data){
     if (data) {
      let details = {
        description:data.shortDescription,
        thumbnailImage:data.thumbnailImage,
        modelNumber: data.modelNumber
      };

      this.selectedProduct = details;
    }
        this.productSvc.addProductToKart(data);
    }

    

    SearchProducts(){
         this.productSvc.searchProductsFromWalmart(this.search)
            .subscribe(
            data => {
                console.log(data)
                this.products=data;
            },
            err => {
                console.log(err)
            }
            );
    }


}
