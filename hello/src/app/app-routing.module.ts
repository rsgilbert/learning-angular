import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
    { path: 'cart', component: CartComponent },
    { path: '**', component: CartComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
