import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ProducthandlingComponent } from './producthandling/producthandling.component';

@NgModule({
  declarations: [
    AppComponent,
    ProducthandlingComponent
=======
import { RegisterCustomerComponent } from './register-customer/register-customer.component';

@NgModule({
  declarations: [
    RegisterCustomerComponent,
    AppComponent,
    RegisterCustomerComponent
>>>>>>> 0e8dba33cc7a647214c286933cd1c56901e03637
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RegisterCustomerComponent]
})
export class AppModule { }
