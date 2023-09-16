import { FavoritesService } from "./favorites.service"
import { ProductsService } from "./products.service"

export function favoritesFactory(isFav: boolean) {
    return () =>
        isFav ? new FavoritesService() : new ProductsService()

}