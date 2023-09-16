import { Directive, OnInit, ViewContainerRef } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Directive({
  selector: '[appProductHost]'
})
export class ProductHostDirective implements OnInit {

  constructor(private vc: ViewContainerRef) {

   }

  ngOnInit(): void {
    //   console.log('initializing product host directive')
      const productRef = this.vc.createComponent(ProductDetailComponent)
      productRef.setInput('product', {
        name: 'Optical nutrition',
        price: 2000
      })
  }

}
