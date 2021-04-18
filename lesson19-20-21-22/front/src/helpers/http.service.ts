import env from '../environment';
import { IProduct } from '../interfaces/product.interface';

export default class {
    public url: string;

    public constructor(path: string) {
        this.url = env.basePath + path;
    }

    public getAll(): Promise<Response> {
        return fetch(this.url);
    }

    public get(id: string): Promise<Response> {
        return fetch(this.url + id)
    }

    public add(data: IProduct): Promise<Response> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public update(id: string, data: any): Promise<Response> {
        return fetch(this.url + id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    public delete(id: string): Promise<Response> {
        return fetch(this.url + id, {
            method: 'DELETE'
        })
    }

    // private _test() {
    //     // code
    // }
}