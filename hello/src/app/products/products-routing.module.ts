import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductListComponent } from './product-list/product-list.component'
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'


const ROUTES: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent},
    { path: '', redirectTo: '/products', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }