import { Injectable } from '@angular/core';
import { Product } from './product';

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

    getProducts(): Product[] {
        return [
            {
                name: 'Javeline' + this.p1,
                price: this.p1
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
    }

    setComment(cmt: string, setBy: string) {
        console.log(`before: ${this.comment} by ${this.commentSetBy}`)
        this.comment = cmt;
        this.commentSetBy = setBy;
        console.log(`after: ${this.comment} by ${this.commentSetBy}`)
    }

}
