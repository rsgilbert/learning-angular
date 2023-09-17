import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartComponent } from './cart/cart.component';
import { NumericDirective } from './numeric.directive';
import { PermissionDirective } from './permission.directive';
import { AutofocusDirective } from './autofocus.directive';
// import { CopyrightDirective } from './copyright.directive';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthModule } from './auth/auth.module';
import { AuthInterceptor } from './auth.interceptor';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';


const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: '**', component: ProductListComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    NumericDirective,
    PermissionDirective,
    // CopyrightDirective, 
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    AuthModule,
    CartComponent,
    AutofocusDirective,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
