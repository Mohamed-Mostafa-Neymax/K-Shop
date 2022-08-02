import { ProfileComponent } from './../components/profile/profile.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './../components/home/home.component';
import { WishesComponent } from './../components/wishes/wishes.component';
import { ContactUsComponent } from './../components/contact-us/contact-us.component';
import { WhoWeAreComponent } from './../components/who-we-are/who-we-are.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'wishes', component: WishesComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'who-we-are', component: WhoWeAreComponent },
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}