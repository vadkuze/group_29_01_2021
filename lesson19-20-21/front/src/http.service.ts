import env from './environment';

export default class {
    url: string;

    constructor(path: string) {
        this.url = env.basePath + path;
    }

    getAll() {
        return fetch(this.url);
    }

    get(id: string) {
        return fetch(this.url + id)
    }

    add(data: any) {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    update(id: string, data: any) {
        return fetch(this.url + id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    delete(id: string) {
        return fetch(this.url + id, {
            method: 'DELETE'
        })
    }
}