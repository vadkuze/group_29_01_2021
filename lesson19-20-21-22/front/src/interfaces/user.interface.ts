import { IProduct } from "./product.interface";

export interface IUser {
    id?: number;
    name: string;
    age: number;
    products?: IProduct[] | null | undefined;
}