import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailesComponent } from './item-detailes/item-detailes.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "shop", component: ShopComponent},
  {path: "contact", component: ContactComponent},
  {path: "about", component: AboutComponent},
  {path: "cart", component: CartComponent},
  {path: "shop/:id", component: ItemDetailesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
