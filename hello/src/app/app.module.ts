import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartComponent } from './cart/cart.component';
// import { CopyrightDirective } from './copyright.directive';

@NgModule({
  declarations: [
    AppComponent,
    // CopyrightDirective, 
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CartComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
