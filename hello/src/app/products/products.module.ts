import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import { CopyrightDirective } from '../copyright.directive';
import { ProductHostDirective } from './product-host.directive';
import { AutofocusDirective } from '../autofocus.directive';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
    declarations: [ProductListComponent, ProductDetailComponent, SortPipe, CopyrightDirective, ProductHostDirective, FavoritesComponent, ProductViewComponent, ProductsCreateComponent,],
    imports: [
        CommonModule, FilterPipe,
        AutofocusDirective,
        ProductsRoutingModule
    ],
    exports: [ProductListComponent],
})
export class ProductsModule { }
