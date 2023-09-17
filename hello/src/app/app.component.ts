import { Component, Inject } from '@angular/core';
import { ProductsService } from './products/products.service';
import { APP_CONFIG, AppConfig, appConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: APP_CONFIG, useValue: appConfig }, 
  ]
})
export class AppComponent {
  title = ''
  description = 'Hi'
  version = 0


  constructor(public productsService: ProductsService,  @Inject(APP_CONFIG) public config: AppConfig) {

  }

  prName : string = ''

  ngOnInit() {
    this.title = this.config.title
    this.version = this.config.version
  }
}
