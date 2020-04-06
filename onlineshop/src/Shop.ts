enum Classification {
  MEN,
  WOMEN,
  KID
}

export interface Category {
  classification: Classification;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  size: Array<number>;
  classification: Category;
}
