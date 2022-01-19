import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from 'src/angular-material.module';
import { HomeComponent } from './home/home.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { NeckwearComponent } from './neckwear/neckwear.component';
import { WristwearComponent } from './wristwear/wristwear.component';
import { RingsComponent } from './rings/rings.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './address/address.component';

import { UpdateaddressComponent } from './updateaddress/updateaddress.component';
import { DeleteaddressComponent } from './deleteaddress/deleteaddress.component';
import { ListOrderItemsComponent } from './list-order-items/list-order-items.component';
import { AdminComponent } from './admin/admin.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { ListAdminOrdersComponent } from './list-admin-orders/list-admin-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductCategoryComponent,
    NeckwearComponent,
    WristwearComponent,
    RingsComponent,
    OrderItemComponent,
    PaymentComponent,
    CheckoutComponent,
    AddressComponent,
    UpdateaddressComponent,
    DeleteaddressComponent,
    ListOrderItemsComponent,
    AdminComponent,
    AdminOrdersComponent,
    ListAdminOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
