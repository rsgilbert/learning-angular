import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from '../products/products.module';
import { OrderListComponent } from './order-list/order-list.component';



@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    ProductsModule
  ]
})
export class OrdersModule { }
