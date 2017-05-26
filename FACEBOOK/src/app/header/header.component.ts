import { Component,OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'custom-header',
  templateUrl: './header.component.html'
  
})
export class HeaderComponent implements OnInit {
    constructor(private productSvc:ProductService){
        this.cartItems= new Array<any>();
    }

    ngOnInit(){
            this.productSvc.getselectedProduct()
            .subscribe((data)=>{
                console.log(data);
                this.cartItems.push(data);
            });
    }
    AppName= 'FACEBOOK';

  viewName="home";
  cartItems:Array<any>
loadRegister(){
   this.viewName="register";
}
loadHome(){
  this.viewName="home";
}
 loadProducts(){
        this.viewName="Products";
    }
  loadOrders(){
        this.viewName="Orders";
    }
  
}
