import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-products-create',
    templateUrl: './products-create.component.html',
    styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent {
    @Output()
    added = new EventEmitter<Product>()

    constructor(private productsService: ProductsService) { }

    get name() {
        return this.productForm.controls.name;
    }

    get price() {
        return this.productForm.controls.price;
    }

    createProduct() {
        console.log(this.productForm.value)
        console.log(this.name.value, this.price.value)
        this.productForm.reset()
        // this.productsService.addProduct(this.name.value, Number(this.price.value))
        // .subscribe(prod => {
        //     this.productForm.reset()
        //     this.added.emit(prod)
        // })
    }

    productForm = new FormGroup({
        name: new FormControl('', { nonNullable: true }),
        price: new FormControl<number | undefined>(undefined, { nonNullable: true }),
        info: new FormGroup({
            category: new FormControl(''),
            description: new FormControl(''),
            image: new FormControl('')
        })
    })
}
