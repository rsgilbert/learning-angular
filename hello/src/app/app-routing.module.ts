import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { ProductListComponent } from './products/product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth/auth.guard';
import { checkoutGuard } from './checkout.guard';


const routes: Routes = [
    {
        path: 'cart',
        component: CartComponent,
        canActivate: [authGuard],
        canDeactivate: [checkoutGuard]
    },
    {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
        canMatch: [authGuard]
    },
    { path: '**', component: PageNotFoundComponent }
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
