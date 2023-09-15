import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import { CopyrightDirective } from '../copyright.directive';



@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, SortPipe, CopyrightDirective],
  imports: [
    CommonModule, FilterPipe, 
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
