import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductListComponent } from './product-list/product-list.component'


const ROUTES : Routes = [
    { path: 'products', component: ProductListComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }