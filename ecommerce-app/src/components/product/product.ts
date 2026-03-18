// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
// import { ProductService } from '../../app/services/product';
// import { Product } from '../../app/models/product';
// import { ButtonComponent } from '../button/button';

// @Component({
//   selector: 'app-product',
//   standalone: true,
//   imports: [CommonModule, ButtonComponent],
//   templateUrl: './product.html',
//   styleUrls: ['./product.css'],
// })
// export class product implements OnInit, AfterViewInit, OnDestroy {
//   products: Product[] = [];

//   constructor(private ProductService: ProductService) {}

//   ngOnInit(): void {
//     this.products = this.ProductService.getProducts();
//     console.log('Products fetched');
//   }

//   ngAfterViewInit(): void {
//     console.log('View Loaded');
//   }

//   ngOnDestroy(): void {
//     console.log('ProductCard destroyed');
//   }
// }

// // import { IProduct } from '../../models/product';
// // import { ProductCard } from '../product-card/product-card';
// // import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
// // import { ProductService } from '../../services/product';

// // @Component({
// //   selector: 'app-products-list',
// //   templateUrl: './products-list.html',
// //   imports: [ProductCard],
// // })
// // export class ProductsList implements OnInit, AfterViewInit, OnDestroy {
// //   products: IProduct[] = [];

// //   constructor(private ProductService: ProductService) {}

// //   ngOnInit(): void {
// //     this.products = this.ProductService.products;
// //     console.log('Products fetched');
// //   }

// //   ngAfterViewInit(): void {
// //     console.log('View Loaded');
// //   }

// //   ngOnDestroy(): void {
// //     console.log('ProductCard destroyed');
// //   }
// // }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../app/services/product';
import { Product } from '../../app/models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.html',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  selectedProduct: Product = {
    name: '',
    price: 0,
    inStock: 0,
  };

  mode: 'list' | 'add' | 'edit' | 'details' = 'list';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  openAdd() {
    this.mode = 'add';
    this.selectedProduct = {
      name: '',
      price: 0,
      inStock: 0,
    };
  }

  openEdit(product: Product) {
    this.mode = 'edit';
    this.selectedProduct = { ...product };
  }

  openDetails(product: Product) {
    this.mode = 'details';
    this.selectedProduct = product;
  }

  isInStock(p: Product): boolean {
    return (p.inStock ?? 0) > 0;
  }

  save() {
    if (this.mode === 'edit') {
      if (!this.selectedProduct.id) return;
      this.productService
        .updateProduct(this.selectedProduct.id!, this.selectedProduct)
        .subscribe(() => {
          this.mode = 'list';
          this.loadProducts();
        });
    } else {
      this.productService.createProduct(this.selectedProduct).subscribe(() => {
        this.mode = 'list';
        this.loadProducts();
      });
    }
  }

  delete(id?: string) {
    if (!id) return;
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((p) => p.id !== id);
      if (this.selectedProduct?.id === id) this.mode = 'list';
    });
  }

  back() {
    this.mode = 'list';
  }
}
