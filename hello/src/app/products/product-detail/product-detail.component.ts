import { Observable } from 'rxjs';
import { Product } from '../product';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ProductsService } from '../products.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
    //   encapsulation: ViewEncapsulation.None,
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges {
    @Input() id: number | undefined = -1 
    product$:Observable<Product> | undefined

    @Input() product : Product | undefined
    price = 0
    @Output() bought = new EventEmitter<string>()

    buy() {
        this.bought.emit(this.product?.name)
        // console.log('bought')
    }

    get productName(): string {
        // console.log(`Get ${this.name}`)
        return this.product?.name ?? '';
    }

    constructor(private productsService: ProductsService, public authService: AuthService) {
        // console.log('ProductDetailComponent constructor(): name is', this.name, 'price is', this.price)
    }

    ngOnInit(): void {
        // console.log('ProductDetailComponent ngOnInit(): Name is', this.name, 'price is', this.price)
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.product$ = this.productsService.getProduct(this.id ?? -1)
        // console.log(changes)
        // const nameChanges = changes['name']
        // console.dir(nameChanges, { depth: null })
        // console.log('isFirstChange', nameChanges.isFirstChange())
    }
}
