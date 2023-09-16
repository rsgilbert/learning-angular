import { AfterViewInit, Component, EventEmitter, Host, OnInit, Optional, Output, SkipSelf, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { ProductViewService } from '../product-view.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ ProductViewService, { provide: ProductsService, useClass: ProductsService}], // this ProductsService instance will be used for this component and child components
//    viewProviders: [ProductsService]
})
export class ProductListComponent implements AfterViewInit, OnInit {
    @ViewChild(ProductDetailComponent)
    productDetail: ProductDetailComponent | undefined
    products: Product[] = []

    ngOnInit(): void {
        this.products = this.productsService.getProducts()
        this.productsService.setComment('ngOnInit(): product-list is running', 'product-list')

    }
    ngAfterViewInit(): void {
        // console.log('ngAfterViewInit productDetail', this.productDetail)
    }

    constructor(private productsService: ProductsService) {
        console.log('ProductListComponent constructor()')

    }


    selectedProduct: Product | undefined
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


    onBuy(name: string) {
        console.log(`onBuy(name): Bought ${name}`)
    }

    removeLast() {
        this.products.pop()
    }

    trackByProducts(index: number, product: Product): string {
        return 'c'
    }

    totalPrice() {
        return this.products.reduce((acc, curr) => acc + curr.price, 0)
    }

    today = new Date()
}
