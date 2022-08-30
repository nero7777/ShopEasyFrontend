import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CustomerComponent } from './Admin/customer/customer.component';
import { EditCustomerComponent } from './Admin/edit-customer/edit-customer.component';

import { ProducthandlingComponent } from './producthandling/producthandling.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminpageComponent,
    CustomerComponent,
    EditCustomerComponent
    ProducthandlingComponent,
    HeaderComponent

import { RegisterCustomerComponent } from './register-customer/register-customer.component';

@NgModule({
  declarations: [
    RegisterCustomerComponent,
    AppComponent,
    RegisterCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RegisterCustomerComponent]
})
export class AppModule { }
