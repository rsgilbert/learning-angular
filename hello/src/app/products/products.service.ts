import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Product, ProductDTO } from './product';



@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    comment = 'my cmt'
    commentSetBy = ''
    p1 = Math.random()
    private productsUrl = 'https://fakestoreapi.com/products'

    constructor(private http: HttpClient) {
        console.log('constructing products service')
    }

    addProduct(name: string, price: number) : Observable<Product> {
        return this.http.post<ProductDTO>(this.productsUrl, {
            title: name,
            price: price 
        })
        .pipe(
            map(productDTO => this.convertToProduct(productDTO))
        )
    }

    getProducts(): Observable<Product[]> {
        // return of(this.products)
        return this.http.get<ProductDTO[]>(this.productsUrl).pipe(
            map(productsDTO => productsDTO.map<Product>(this.convertToProduct))
        )
    }

    getProduct(id: number) : Observable<Product> {
        return this.http.get<ProductDTO>(`${this.productsUrl}/${id}`).pipe(map(this.convertToProduct))
    }

    private products : Product[] = [
        {
            id: 1,
            name: 'Javeline' ,
            price: Number((100 * this.p1).toFixed(2)),
        },
        {
            id: 2,
            name: 'Samsung galaxy A20',
            price: 100
        },
        {
            id: 3,
            name: 'Bicycle',
            price: 20,
        },
        {
            id: 4,
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

    private convertToProduct(product: ProductDTO) : Product {
        return {
            id: product.id,
            name: product.title,
            price: product.price
        }
    }
}
