import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export interface Product {
    id: number,
    name: string,
    image: string,
    rate: number,
    price: number,
    amount: number,
    priceBefore?: number,
    activeStars?: number[],
    inactiveStars?: number[],
    isFavorite: boolean,
    isNew: boolean,
    hasOffer: boolean,
}

@Injectable({providedIn: 'root'})
export class ProductService {

    showProductDetails = new Subject<Product | undefined>();

    products: Product[] = [
        {
            id: 1,
            name: 'تيشيرت كم قصير',
            image: 'assets/products/pic1.png',
            rate: 3,
            price: 90.00,
            amount: 0,
            isFavorite: false,
            isNew: true,
            hasOffer: false
        },
        {
            id: 2,
            name: 'موبايل شاومي',
            image: 'assets/products/pic2.png',
            rate: 4,
            price: 90.00,
            amount: 0,
            isFavorite: false,
            isNew: true,
            hasOffer: false
        },
        {
            id: 3,
            name: 'موبايل أيفون',
            image: 'assets/products/pic3.png',
            rate: 2,
            price: 90.00,
            amount: 0,
            isFavorite: false,
            isNew: true,
            hasOffer: false
        },
        {
            id: 4,
            name: 'تيشيرت كم طويل',
            image: 'assets/products/pic4.png',
            rate: 1,
            price: 90.00,
            priceBefore: 150.00,
            amount: 0,
            isFavorite: false,
            isNew: false,
            hasOffer: true
        },
        {
            id: 5,
            name: 'عقد فضة',
            image: 'assets/products/pic5.png',
            rate: 5,
            price: 90.00,
            amount: 0,
            isFavorite: false,
            isNew: true,
            hasOffer: false
        },
        {
            id: 6,
            name: 'تيشيرت نص كم أطفال',
            image: 'assets/products/pic6.png',
            rate: 4,
            price: 90.00,
            priceBefore: 150.00,
            amount: 0,
            isFavorite: false,
            isNew: false,
            hasOffer: true
        },
        {
            id: 7,
            name: 'قميص قطن كم طويل',
            image: 'assets/products/pic7.png',
            rate: 3,
            price: 90.00,
            amount: 0,
            isFavorite: false,
            isNew: true,
            hasOffer: false
        },
    ];

    productsSeenRecently: Product[] = [];

    onAddLastSeenProduct(prod: Product) {
        const productIsExist = this.productsSeenRecently.findIndex( product => prod['id'] == product['id'] );
        if( this.productsSeenRecently.length < 3 && productIsExist == -1 ) this.productsSeenRecently.unshift(prod);    
        else if( this.productsSeenRecently.length == 3 && productIsExist == -1) {
            this.productsSeenRecently.pop();
            this.productsSeenRecently.unshift(prod);
        }
        this.showProductDetails.next(prod);
    }
}