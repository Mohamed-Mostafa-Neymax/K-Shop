import { ProductService } from './../../../services/products.service';
import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
  }

  onHideOverlay() {
    this.cartService.overlayIsShow.next(false);
    this.cartService.cartIsShow.next(false);
    this.productService.showProductDetails.next(undefined);
  }
}
