// Normalized product shape for the UI.
// Backend may return `_id` + either `name` or `pName`.
export interface Product {
  id?: string;
  name: string;
  price: number;
  inStock: number; // stock quantity
  desc?: string;
  img?: string;
}
