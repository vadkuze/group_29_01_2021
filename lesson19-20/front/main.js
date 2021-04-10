import Http from './http.service.js';

let productHttpService = new Http('/products/');
let btn = document.querySelector('#btn')
btn.onclick = function () {

// productHttpService.getAll().then(data => data.json()).then(console.log);
// productHttpService.get(100).then(data => data.json()).then(console.log);
productHttpService.add(
    {
        "title": "Test Product",
        "price": 100,
        "description": "Test Description",
        "category": "new",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
).then(data => data.json()).then(console.log);

}
