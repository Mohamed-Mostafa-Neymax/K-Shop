import { Component, Input } from '@angular/core';

import { Product } from './../../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() productDetails!: Product | undefined;

  constructor() { }

}
