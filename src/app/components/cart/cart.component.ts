import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Product } from '../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts!: Product[];
  totalPrice = 0;

  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.cartProducts = this.cartService.cartProducts;
    this.totalPrice = this.cartService.calCulatePriceAmount();
    this.cartService.cartTotalPrice.subscribe( (totalPrice: number) => this.totalPrice = totalPrice );
  }

  onIncreaseAmount(prod: Product) {
    this.cartService.addtoCart(prod);
  }
  onDecreaseAmount(prod: Product) {
    this.cartService.decreaseAmount(prod);
  }

  onCloseCart() {
    this.cartService.cartIsShow.next(false);
    this.cartService.overlayIsShow.next(false);
  }

}
