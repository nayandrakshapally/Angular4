import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';




@Injectable(
)
export class ProductService {

    constructor(private http: Http) {

  }

     cartItems:Array<any> =new Array<any>();
     selectedProduct: Subject<any> = new Subject<any>();
     products:any;
     
     

    //Adding the product to cart.
    addProductToKart(data:any){
        this.cartItems.push(data);
    }
    //Retrieving the list of products.
     
     
    getselectedProduct():Observable<any>{
        return this.selectedProduct.asObservable(
        );
    }

    getProductsFromWalmart():Observable<any>{
   return this.http.get("wmapi/")
    .map(response=>response.json())

  };
  searchProductsFromWalmart(data): Observable<Array<any>> {
    return this.http.get("wmapi/" + data)
      .map(response => response.json().items)
  };

    
}