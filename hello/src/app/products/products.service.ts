import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    comment = 'my cmt'
    commentSetBy = ''
    p1 = Math.random()

    constructor() {
        // try {
        //     throw new Error('xx')
        // }
        // catch (e) {
        //     console.error(e)
        // }
        console.log('constructing products service')
    }

    getProducts(): Observable<Product[]> {
        return of(this.products)
    }

    private products : Product[] = [
        {
            name: 'Javeline' ,
            price: Number((100 * this.p1).toFixed(2)),
        },
        {
            name: 'Samsung galaxy A20',
            price: 100
        },
        {
            name: 'Bicycle',
            price: 20,
        },
        {
            name: 'Laptop',
            price: 2000000
        }
    ]
    setComment(cmt: string, setBy: string) {
        console.log(`before: ${this.comment} by ${this.commentSetBy}`)
        this.comment = cmt;
        this.commentSetBy = setBy;
        console.log(`after: ${this.comment} by ${this.commentSetBy}`)
    }

}
