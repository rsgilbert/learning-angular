import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { ProductListComponent } from '../products/product-list/product-list.component';


const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: '**', component: ProductListComponent }
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
