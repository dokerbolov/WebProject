export class Prodaction{
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    color: string;
    size: string;
    category_id: number;
}

export class Category{
    id:number;
    name:string;
}
export class LoginResponse{
    token:string;
}
export class User{
    id:number;
    username:string;
    password:string;
}
export class Company{
    id: number;
    name: string;
    description: string;
    city:string;
    address:string;
}