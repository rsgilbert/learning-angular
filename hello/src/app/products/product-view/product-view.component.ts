import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ProductViewService } from '../product-view.service';
import { filter,Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: ['./product-view.component.css'],
    //   providers: [ProductViewService]
})
export class ProductViewComponent implements OnInit, OnDestroy {
    @Input() id = -1
    constructor(private productViewService: ProductViewService) { }
    name = ''
    price = 0 

    private productSub = new Subject<void>()

    ngOnInit(): void {
        this.getProduct()
    }

    

    ngOnDestroy(): void {
        this.productSub.next()
        this.productSub.complete()
    }
    private getProduct() {
        this.productViewService.getProduct(this.id)
            .pipe(
                takeUntil(this.productSub)
            )
            .subscribe(product => {
                this.name = product.name
                this.price  = product.price
            })
    }

}
