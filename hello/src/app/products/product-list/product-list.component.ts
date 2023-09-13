import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';

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

    selectedProduct: Product | undefined
    title = 'Products'
    subtitle = 'A list of products you can buy'
    products = [
        {
            name: 'Watch',
            price: 10
        },
        {
            name: 'Swissroll',
            price: 8000
        },
        {
            name: 'Blanket',
            price: 5
        },
        {
            name: 'Art piece',
            price: 2000
        },
        {
            name: 'Frying pan',
            price: 200
        }
    ]
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


    onBuy(name: string) {
        console.log(`onBuy(name): Bought ${name}`)
    }

    removeLast() {
        this.products.pop()
    }

    trackByProducts(index: number, product: Product): string {
        return 'c'
    }
}
