// import { Injectable } from '@angular/core';
// import { Product } from '../models/product';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductService {
//   private URL = '/api/products';

//   // getProducts(): Product[] {
//   // }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

type ProductsApiResponse =
  | Product[]
  | {
      status?: string;
      data?: { products?: any[]; product?: any };
    };

function normalizeProduct(raw: any): Product {
  return {
    id: raw?._id?.toString?.() ?? raw?.id?.toString?.() ?? undefined,
    name: raw?.name ?? raw?.pName ?? '',
    price: Number(raw?.price ?? 0),
    inStock: Number(raw?.inStock ?? 0),
    desc: raw?.desc ?? raw?.description ?? '',
    img: raw?.img ?? raw?.image ?? '',
  };
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductsApiResponse>(this.apiUrl).pipe(
      map((res: any) => {
        const list = Array.isArray(res) ? res : res?.data?.products ?? [];
        return (list ?? []).map(normalizeProduct);
      }),
    );
  }

  getProductById(id: string): Observable<Product> {
    const safeId = encodeURIComponent(id);
    return this.http.get<any>(`${this.apiUrl}/${safeId}`).pipe(
      map((res) => normalizeProduct(res?.data?.product ?? res?.data ?? res)),
    );
  }

  createProduct(product: Product): Observable<Product> {
    // Send both `name` and `pName` to be compatible with older backend variants.
    const payload: any = {
      name: product.name,
      pName: product.name,
      price: product.price,
      inStock: product.inStock,
      desc: product.desc,
      img: product.img,
    };
    return this.http.post<any>(this.apiUrl, payload).pipe(
      map((res) => normalizeProduct(res?.data?.product ?? res?.data ?? res)),
    );
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    const safeId = encodeURIComponent(id);
    const payload: any = {
      name: product.name,
      pName: product.name,
      price: product.price,
      inStock: product.inStock,
      desc: product.desc,
      img: product.img,
    };
    return this.http.put<any>(`${this.apiUrl}/${safeId}`, payload).pipe(
      map((res) => normalizeProduct(res?.data?.product ?? res?.data ?? res)),
    );
  }

  deleteProduct(id: string): Observable<any> {
    const safeId = encodeURIComponent(id);
    return this.http.delete(`${this.apiUrl}/${safeId}`);
  }
}
