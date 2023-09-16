
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Product } from '../product';

@Component({
    
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
    //   encapsulation: ViewEncapsulation.None,
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges {
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

    constructor() {
        // console.log('ProductDetailComponent constructor(): name is', this.name, 'price is', this.price)
    }

    ngOnInit(): void {
        // console.log('ProductDetailComponent ngOnInit(): Name is', this.name, 'price is', this.price)
    }

    ngOnChanges(changes: SimpleChanges): void {
        // console.log(changes)
        // const nameChanges = changes['name']
        // console.dir(nameChanges, { depth: null })
        // console.log('isFirstChange', nameChanges.isFirstChange())
    }
}
