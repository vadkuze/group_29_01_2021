import { IProduct } from "../interfaces/product.interface";
import { IUser } from "../interfaces/user.interface";
import Http from '../helpers/http.service';
export class User {
    public name: string;
    public age: number;
    public products: IProduct[] | null | undefined;
    private readonly _token = 'test key';

    public constructor({ name, age, products }: IUser) {
        this.name = name;
        this.age = age;
        this.products = products;

        console.log(this._token);   
    }

    protected getHttp(path: string): Http {
        return new Http(path);
    }
}



