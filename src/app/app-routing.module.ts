import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminComponent } from './admin/admin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DeleteaddressComponent } from './deleteaddress/deleteaddress.component';
import { HomeComponent } from './home/home.component';
import { ListAdminOrdersComponent } from './list-admin-orders/list-admin-orders.component';
import { ListOrderItemsComponent } from './list-order-items/list-order-items.component';
import { LoginComponent } from './login/login.component';
import { NeckwearComponent } from './neckwear/neckwear.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { RingsComponent } from './rings/rings.component';
import { UpdateaddressComponent } from './updateaddress/updateaddress.component';
import { WristwearComponent } from './wristwear/wristwear.component';
import { CustomerserviceComponent } from './customerservice/customerservice.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home' },
  {path: 'login', component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'product-category',component:ProductCategoryComponent},
  {path:'wristwear',component:WristwearComponent},
  {path:'neckwear',component:NeckwearComponent},
  {path:'rings',component:RingsComponent},
  {path:'order-item',component:OrderItemComponent},
  {path:'address',component:AddressComponent},
  {path:'payment',component:PaymentComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'updateaddress',component:UpdateaddressComponent},
  {path:'deleteaddress',component:DeleteaddressComponent},
  {path:'list-order-items',component:ListOrderItemsComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin-orders',component:AdminOrdersComponent},
  {path:'list-admin-orders',component:ListAdminOrdersComponent},
  {path:'customerservice',component:CustomerserviceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
