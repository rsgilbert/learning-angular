import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import { CopyrightDirective } from '../copyright.directive';
import { ProductHostDirective } from './product-host.directive';
import { AutofocusDirective } from '../autofocus.directive';



@NgModule({
    declarations: [ProductListComponent, ProductDetailComponent, SortPipe, CopyrightDirective, ProductHostDirective,],
    imports: [
        CommonModule, FilterPipe,
        AutofocusDirective
    ],
    exports: [ProductListComponent]
})
export class ProductsModule { }
