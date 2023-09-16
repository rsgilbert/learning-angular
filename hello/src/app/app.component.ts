import { Component } from '@angular/core';
import { ProductsService } from './products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning Angular';
  description = 'Hi'

  constructor(private productsService: ProductsService) {

  }

  prName : string = ''

  ngOnInit() {
    this.prName = this.productsService.getProducts()[0].name
  }
}
