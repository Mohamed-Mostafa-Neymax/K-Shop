import { CartService } from './../../../services/cart.service';
import { Product, ProductService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products!: Product[]

  constructor(private productService: ProductService, private cartService: CartService) { }
  ngOnInit(): void {
    this.products = this.productService.products;
    this.calculateRate();
  }

  calculateRate() {
    for( let c = 0; c < this.products.length; c++ ) {
      const helperActiveStars = [];
      const helperInactiveStars = [];
      const inActiveStars = 5 - this.products[c].rate;
      for( let i = 0; i < this.products[c].rate; i++ ) helperActiveStars.push(1);
      for( let i = 0; i < inActiveStars; i++ ) helperInactiveStars.push(1);
      this.products[c] = { ...this.products[c], activeStars: helperActiveStars, inactiveStars: helperInactiveStars }
    }
  }

  onShowDetails(prod: Product) {
    this.productService.onAddLastSeenProduct(prod);
    this.cartService.overlayIsShow.next(true);
  }

  onAddToCart(prod: Product) {
    this.cartService.addtoCart(prod);
  }

  onToggleFavorite(prod: Product) {
    const productIndex = this.products.findIndex( product => prod['id'] == product['id'] );
    this.products[productIndex] = { ...prod, isFavorite: !prod.isFavorite }
  }
}
