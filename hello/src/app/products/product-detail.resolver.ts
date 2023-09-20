import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { Product } from "./product";
import { inject } from '@angular/core'
import { ProductsService } from "./products.service";


export const productDetailResolver : ResolveFn<Product> = 
    (route: ActivatedRouteSnapshot) => {
        const productService = inject(ProductsService)
        const id = Number(route.paramMap.get('id'))
        console.log('id', id)
        if(id > 10 || id < 0) {
            confirm('id must be btn 0-9')
        }
        return productService.getProduct(id)
    }