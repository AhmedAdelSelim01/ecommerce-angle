import { Component } from '@angular/core';
import { Slider } from '../slider/slider';
import { ProductsComponent } from '../product/product';

@Component({
  selector: 'app-home',
  imports: [Slider, ProductsComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
