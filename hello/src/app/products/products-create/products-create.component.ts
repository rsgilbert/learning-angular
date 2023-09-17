import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent {
    @Output() 
    added = new EventEmitter<Product>()

    constructor(private productsService: ProductsService) {}

    createProduct(name: string, price: number) {
        this.productsService.addProduct(name, price)
            .subscribe(product => {
                this.added.emit(product)
            })
    }
}
