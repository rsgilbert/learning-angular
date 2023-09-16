import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    comment = ''
    commentSetBy = ''
    p1 = Math.random()

    constructor() {
        console.log('constructing products service')
    }

    getProducts(): Product[] {
        return [
            {
                name: 'Javeline' + this.p1,
                price: this.p1
            },
            {
                name: 'Laptop',
                price: 2000000
            },
            {
                name: 'Pen',
                price: 500
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
