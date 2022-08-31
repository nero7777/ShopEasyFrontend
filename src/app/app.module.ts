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
import { MyCardComponent } from './my-card/my-card.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminpageComponent,
    CustomerComponent,
    EditCustomerComponent,
    ProducthandlingComponent,
    HeaderComponent,
    MyCardComponent,
    AboutusComponent,
    ContactusComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
