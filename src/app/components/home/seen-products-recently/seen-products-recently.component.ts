import { Component, OnInit } from '@angular/core';

import { Product, ProductService } from './../../../services/products.service';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-seen-products-recently',
  templateUrl: './seen-products-recently.component.html',
  styleUrls: ['./seen-products-recently.component.css']
})
export class SeenProductsRecentlyComponent implements OnInit {

  products!: Product[];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productService.productsSeenRecently;
  }

  onShowDetails(prod: Product) {
    this.productService.onAddLastSeenProduct(prod);
    this.cartService.overlayIsShow.next(true);
  }

  onAddToCart(prod: Product) {
    this.cartService.addtoCart(prod);
  }

}
