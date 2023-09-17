import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';
import { Observable, filter, of, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductViewService {


    constructor(private productsService: ProductsService) {
        console.log('ProductViewService constructor()')
    }
    product: Product | undefined
    getProduct(id: number): Observable<Product> {
        return this.productsService.getProducts()
            .pipe(
                switchMap(products => {
                    // if (!this.product) {
                    //     this.product = products[id]
                    // }
                    return of(products[id])
                }),
                filter(prod => !!prod) //dont emit if prod is undefined
            )
    }
}
