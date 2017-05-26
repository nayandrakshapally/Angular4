import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {RegisterComponent} from './register/register.component';
import {ProductComponent} from './product/product.component';
import {HomeComponent} from './home/home.component';
import {OrderComponent} from './order/order.component';
import {ProductService} from './service/product.service';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { AlphabetsOnlyDirective } from './directives/alphabets-only.directive';
import { DatepickerModule } from 'angular2-material-datepicker';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    ProductComponent,
    HomeComponent,
    OrderComponent,
    ProductdetailComponent,
    NumbersOnlyDirective,
    AlphabetsOnlyDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatepickerModule,
     RouterModule.forRoot([
       {
          path: "home", component: HomeComponent
       },
       { 
          path: "register", component: RegisterComponent 
       },
       { path: "products", component: ProductComponent
       },
       {path:'',redirectTo:'home',pathMatch:'full'},

       {path:'**',redirectTo:'home',pathMatch:'full'},
  ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
