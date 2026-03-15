import { Routes } from '@angular/router';
import { App } from './app';
import { Home } from '../components/home/home';
// import { product } from '../components/product/product';
import { product } from '../components/product/product';
import { Cart } from '../components/cart/cart';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'product', component: product },
  { path: 'cart', component: Cart },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },

  // // {path:'' , component:Home},
  // {path:'', redirectTo:'home' , pathMatch:'full'},
  // {path:'home' ,component:Home , children:[
  //  {path:'', redirectTo:'tv' , pathMatch:'full'},
  //     {path:'tv' , component:Tv},
  //     {path:'laptop' , component:Laptop}
  // ] },
  // {path:'about' ,  component:About},
  // {path:'contact' ,  component:Contact},
  // {path:'**' , component:NotFound}
];
