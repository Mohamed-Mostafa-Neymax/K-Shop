import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module';

import { CarouselComponent } from "../components/home/carousel/carousel.component";
import { HomeComponent } from "../components/home/home.component";
import { ProductsHeaderComponent } from "../components/home/products-header/products-header.component";
import { ProductsListComponent } from "../components/home/products-list/products-list.component";
import { SeenProductsRecentlyComponent } from "../components/home/seen-products-recently/seen-products-recently.component";
import { WishesComponent } from "../components/wishes/wishes.component";


@NgModule({
    declarations: [
        CarouselComponent,
        HomeComponent,
        ProductsHeaderComponent,
        ProductsListComponent,
        SeenProductsRecentlyComponent,
        WishesComponent,
    ],
    imports: [RouterModule, CommonModule, NgbModule, MaterialModule]
})

export class HomeModule {}