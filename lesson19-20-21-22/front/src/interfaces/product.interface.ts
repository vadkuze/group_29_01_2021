import { Category } from "../enums/category.enum";

export interface IProduct {
    title: string;
    description: string;
    category: Category;
    image: string;
    price: number;
    readonly id?: string;
}