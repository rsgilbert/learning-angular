import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductViewService {


    constructor(private productsService: ProductsService) { 
        console.log('ProductViewService constructor()')
//         try {
// throw new Error('xx')
//         }
//         catch(e) {
//             console.error(e)
//         }
    }
    product: Product | undefined
    getProduct(id: number): Product | undefined {
        const products = this.productsService.getProducts()
        return products[id]
        if (!this.product) {
            this.product = products[id]
        }
        return this.product
    }
}
