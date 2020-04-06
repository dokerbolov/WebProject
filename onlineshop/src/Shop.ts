enum Classification {
  MEN,
  WOMEN,
  KID
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
