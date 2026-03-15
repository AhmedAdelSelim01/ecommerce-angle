import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
  img: string;
};

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
})
export class product {
  products: Product[] = [
    {
      id: 1,
      name: 'AirPods Pro',
      description:
        'Active noise cancellation, adaptive transparency, and personalized spatial audio.',
      price: 249.99,
      inStock: true,
      img: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&q=80',
    },
    {
      id: 2,
      name: 'Mechanical Keyboard',
      description: 'Tactile RGB mechanical switches with PBT keycaps and aluminum frame.',
      price: 129.95,
      inStock: true,
      img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80',
    },
    {
      id: 3,
      name: 'Sony WH-1000XM5',
      description: 'Industry-leading noise canceling with Auto NC Optimizer and 30-hr battery.',
      price: 349.99,
      inStock: false,
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    },
    {
      id: 4,
      name: 'Smart Watch Series 9',
      description: 'Always-on Retina display, health sensors, crash detection, and ECG app.',
      price: 399.0,
      inStock: true,
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
    },
    {
      id: 5,
      name: '4K Webcam Pro',
      description: '4K Ultra HD streaming, AI-powered auto-framing, and low-light correction.',
      price: 89.99,
      inStock: false,
      img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80',
    },
    {
      id: 6,
      name: 'Portable SSD 1TB',
      description: 'USB-C NVMe SSD with 1050MB/s read speed in a rugged shell.',
      price: 109.99,
      inStock: true,
      img: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&q=80',
    },
    {
      id: 9,
      name: 'Daiwa BG Saltwater Spinning Reel',
      description:
        'Machined aluminum Hardbodyz body with ABS aluminum spool, built to handle brutal saltwater conditions.',
      price: 139.99,
      inStock: true,
      img: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&q=80',
    },
    {
      id: 10,
      name: 'Simms G3 Guide Waders',
      description:
        '4-layer Gore-Tex Pro waders with articulated fit, gravel guard, and reinforced knees for all-day comfort.',
      price: 699.0,
      inStock: false,
      img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80',
    },
    {
      id: 11,
      name: 'Abu Garcia Baitcasting Rod & Reel Combo',
      description:
        'Carbon matrix drag system paired with a 7ft medium-heavy rod, precision engineered for bass and pike.',
      price: 189.95,
      inStock: true,
      img: 'https://images.unsplash.com/photo-1463852247062-1bbca38f7805?w=400&q=80',
    },
    {
      id: 12,
      name: 'Polarized Fishing Sunglasses',
      description:
        'TAC polarized lenses with UV400 protection, eliminating water glare for superior underwater visibility.',
      price: 49.99,
      inStock: true,
      img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80',
    },
    {
      id: 13,
      name: 'Rubber Landing Net XL',
      description:
        'Fish-friendly rubber mesh with telescopic handle extending to 180cm, suitable for carp and pike.',
      price: 44.95,
      inStock: false,
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    },
    {
      id: 14,
      name: 'Fishing Headlamp 1000 Lumen',
      description:
        'Waterproof IPX6 headlamp with red night-vision mode, 6 lighting modes, and 20hr battery life.',
      price: 32.99,
      inStock: true,
      img: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=400&q=80',
    },
  ];
}
