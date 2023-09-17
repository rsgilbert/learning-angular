import { Injectable } from "@angular/core";
import { ProductsService } from "./products.service";


@Injectable()
export class FavoritesService extends ProductsService {
    // override getProducts(): Product[] {
    //     return super.getProducts().slice(0, 2)
    // }
}