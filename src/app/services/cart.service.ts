import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Product } from './products.service';

@Injectable({providedIn: 'root'})
export class CartService {

    cartIsShow = new Subject<boolean>();
    overlayIsShow = new Subject<boolean>();
    cartAmount = new Subject<number>();
    cartTotalPrice = new Subject<number>();

    cartProducts: Product[] = [];

    addtoCart(prod: Product) {
        const productIndex = this.cartProducts.findIndex( product => prod['id'] == product['id'] );
        if( productIndex == -1 ) this.cartProducts.push({...prod, amount: 1});
        else this.cartProducts[productIndex] = { ...prod, amount: this.cartProducts[productIndex].amount + 1 };
        this.calCulatePriceAmount();
    }

    decreaseAmount(prod: Product) {
        const productIndex = this.cartProducts.findIndex( product => prod['id'] == product['id'] );
        if( prod.amount > 1 ) this.cartProducts[productIndex].amount = prod.amount - 1;
        else this.cartProducts.splice(productIndex, 1);
        this.calCulatePriceAmount();
    }

    calCulatePriceAmount(): number {
        let totalAmount = 0;
        let totalPrice = 0;
        for( let product of this.cartProducts ) {
            totalAmount += product.amount;
            totalPrice = totalPrice + product.amount * product.price;
        }
        this.cartAmount.next(totalAmount);
        this.cartTotalPrice.next(totalPrice);
        return totalPrice;
    }
}