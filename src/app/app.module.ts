import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductComponent } from './product/product.component';
import { MyProdComponent } from './my-prod/my-prod.component';
  
import { ProducthandlingComponent } from './producthandling/producthandling.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';

@NgModule({
  declarations: [
    RegisterCustomerComponent,
    AppComponent,
    RegisterCustomerComponent,
    AddproductComponent,
    ProductComponent,
    MyProdComponent,
    ProducthandlingComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RegisterCustomerComponent]
})
export class AppModule { }
