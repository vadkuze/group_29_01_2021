import env from './environment.js';

export default class {
    constructor(path) {
        this.url = env.basePath + path;
    }

    getAll() {
        return fetch(this.url);
    }

    get(id) {
        return fetch(this.url + id)
    }

    add(data) {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    update(id, data) {
        return fetch(this.url + id, {
            method: 'PUT',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    delete(id) {
        return fetch(this.url + id, {
            method: 'DELETE'
        })
    }
}