import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../components/navbar/navbar';
import { Slider } from '../components/slider/slider';
import { Footer } from '../components/footer/footer';
import { Dashboard } from "../components/dashboard/dashboard";
import { ProductsComponent } from "../components/product/product";

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer, RouterOutlet, Dashboard, ProductsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ecommerce-app');
}
