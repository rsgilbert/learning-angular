import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
    products: Product[] = []

    constructor(private productsService: ProductsService) {
        console.log('FavoritesComponent constructor()')
    }

    ngOnInit(): void {
        this.productsService.setComment('ngOnInit(): Favorite is running', 'favorite')
        this.products = this.productsService.getProducts()
    }

}
