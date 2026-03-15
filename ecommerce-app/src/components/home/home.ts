import { Component } from '@angular/core';
import { Slider } from '../slider/slider';
import { product } from '../product/product';

@Component({
  selector: 'app-home',
  imports: [Slider, product],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
