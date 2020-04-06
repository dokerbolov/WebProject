import { Classification } from './Classification.enum';

export interface Category {
  name: string;
  classification: Classification;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  size: Array<number>;
  classification: Classification;
}
