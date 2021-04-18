import { IAdmin } from "../interfaces/admin.interface";
import { IProduct } from "../interfaces/product.interface";
import { User } from "./user";
import Http from '../helpers/http.service';

export class Admin extends User {
    public products: IProduct[] | null | undefined;
    public role: string;
    private _httpService: Http;
    public currentState: {};

    public constructor({ role, name, age, products }: IAdmin) {
       super( {name, age,products });
       this.role = role;
       this._httpService = this.getHttp('path/to/request');
       console.log(this._httpService);
    }
}

let admin: IAdmin = new Admin({role: 'admin', name: 'Bob', age: 10});
