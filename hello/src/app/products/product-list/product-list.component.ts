import { AfterViewInit, Component, EventEmitter, Host, OnInit, Optional, Output, SkipSelf, ViewChild, OnDestroy } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductsService } from '../products.service';
import { ProductViewService } from '../product-view.service';
import { Subscription, Observable } from 'rxjs';
import { Product } from '../product';
@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements AfterViewInit, OnInit, OnDestroy {
    @ViewChild(ProductDetailComponent)
    productDetail: ProductDetailComponent | undefined
    products: Product[] = []
    private productsSub: Subscription | undefined
    dt : string = ''
    dtSub : Subscription | undefined
    products$ : Observable<Product[]> | undefined

    private getProducts() {
        this.products$ = this.productsService.getProducts()
        // this.productsSub = this.productsService.getProducts().subscribe(products => this.products = products)
    }

    ngOnInit(): void {
        this.getProducts()
        this.setDate()
    }

    setDate() {
        const observable1 = new Observable<Date>(o => {
            setInterval(() => {
                o.next(new Date())
            }, 1000)
        });
        this.dtSub = observable1.subscribe(d => {
            console.log('another dt', d)
            this.dt = d.toISOString().split('T')[1]
        })
    }

    cancelDateSubscription() {
        console.log('cancelling subscription', this.dtSub)
        this.dtSub?.unsubscribe()
    }



    ngOnDestroy(): void {
        this.productsSub?.unsubscribe()
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
