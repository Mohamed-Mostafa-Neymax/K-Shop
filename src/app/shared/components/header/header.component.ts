import { ProductService, Product } from './../../../services/products.service';
import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartIsShown = false;
  productIsShown!: Product | undefined;
  cartProductsAmount = 0;
  searchInp = '';
  searchProducts!: Product[];
  isOverlayActive = false;

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.cartService.cartIsShow.subscribe( (isShow: boolean) => this.cartIsShown = isShow );
    this.productService.showProductDetails.subscribe( (prod: Product | undefined) => this.productIsShown = prod );
    this.cartService.cartAmount.subscribe( (prodsAmount: number) => this.cartProductsAmount = prodsAmount );
    this.cartService.overlayIsShow.subscribe( isActive => this.isOverlayActive = isActive );
  }

  onFocusSearch() {
    this.cartService.overlayIsShow.next(true);
  }

  onShowCart() {
    this.cartService.overlayIsShow.next(true);
    this.cartService.cartIsShow.next(true);
  }

  onSearchProducts() {
    this.searchProducts = this.productService.products.filter( (prod: Product) => prod.name.includes(this.searchInp) );
  }

  onShowDetails(prod: Product) {
    this.productService.onAddLastSeenProduct(prod);
    this.cartService.overlayIsShow.next(true);
    this.searchInp = '';
  }
}
