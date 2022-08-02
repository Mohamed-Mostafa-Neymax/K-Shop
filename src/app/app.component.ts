import { Component, OnInit } from '@angular/core';

import { CartService } from './services/cart.service';
import { Product, ProductService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  overlayIsShown = false;
  cartIsShown = false;
  productDetails!: Product | undefined;

  constructor(private cartService: CartService, private productService: ProductService) {}

  ngOnInit(): void {
    this.cartService.overlayIsShow.subscribe( (isShow: boolean) => this.overlayIsShown = isShow );
    this.cartService.cartIsShow.subscribe( (isShow: boolean) => this.cartIsShown = isShow );
    this.productService.showProductDetails.subscribe( (prod: Product | undefined) => this.productDetails = prod );
  }
}
