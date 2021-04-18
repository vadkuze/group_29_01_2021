import { Category } from './enums/category.enum';
import Http from './helpers/http.service';
import { IProduct } from './interfaces/product.interface';

let productHttpService: Http = new Http('/products/');
let btn: HTMLButtonElement | null = document.querySelector('#btn');

if(btn) {
    btn.addEventListener('click', function () {
        const testSentData: IProduct  = {
            title: "Test Product",
            price: 100,
            description: "Test Description",
            category: Category.MEN,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        }
        
        productHttpService.add(testSentData).then((response: Response) => response.json()).then(console.log);

        productHttpService.getAll()
                          .then((response: Response) => response.json())
                          .then((products: IProduct[]) => console.log(products))
                          
        productHttpService.get('3')
                        .then((response: Response) => response.json())
                        .then((product: IProduct) => console.log(product))
        productHttpService.delete("5").then(data => data.json()).then(console.log);
    
    })
}



// function sum (numbers: number[]): number {
//     return numbers.reduce((acc: number, curr: number) => acc + curr)
// }

// function show(message: string): void {
//     alert(message);
// }

// show(sum([10, 20]).toString())

