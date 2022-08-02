import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Modules
import { AppRoutingModule } from './modules/app-routing.module';
import { MaterialModule } from './modules/material.module';
import { HomeModule } from './modules/home.module';

// Directives
import { HoverDirective } from './directives/hover.directive';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { OverlayComponent } from './shared/components/overlay/overlay.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ProductDetailsComponent } from './components/home/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContactUsComponent,
    WhoWeAreComponent,
    PageNotFoundComponent,
    OverlayComponent,
    CartComponent,
    ProfileComponent,
    ModalComponent,
    ProductDetailsComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
