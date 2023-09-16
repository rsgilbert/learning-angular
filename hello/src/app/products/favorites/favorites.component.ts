import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { FavoritesService } from '../favorites.service';
import { favoritesFactory } from '../favorites';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers: [{
    provide: ProductsService,
    useFactory: () => new FavoritesService() // favoritesFactory(false)
    // useClass: FavoritesService
  }]
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
