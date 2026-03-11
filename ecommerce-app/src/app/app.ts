import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../components/navbar/navbar';
import { Slider } from '../components/slider/slider';
import { Card } from '../components/card/card';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Slider, Card, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ecommerce-app');
}
