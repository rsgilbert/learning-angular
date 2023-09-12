import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {
    @ViewChild(ProductDetailComponent) 
    productDetail: ProductDetailComponent | undefined

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit productDetail', this.productDetail)
    }

    selectedProduct = 'Webcam'
    title = 'Products'
    subtitle = 'A list of products you can buy'
    currentClasses = {
        star: true, 
        light: true,
        dark: false
    }
    currentStyles = {
        'font-weight': 'bold'
    }

    onClick() {
        console.log('Clicked')
    }
    updateSelectedProduct(newSelectedProduct: string){ 
        this.selectedProduct = newSelectedProduct
    }

   onBuy(name: string) {
    console.log(`onBuy(name): Bought ${name}`)
   }
}
