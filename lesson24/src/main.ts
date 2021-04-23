import './../style.scss';


import { from, fromEvent } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { concatMap, debounceTime, distinctUntilChanged, map, pluck, switchMap, tap } from 'rxjs/operators';
import { OAUTH_TOKEN } from './config/config';
import { ProgressBar } from './progress-bar';


// import { BehaviorSubject, interval, of } from 'rxjs';

// let stream$: BehaviorSubject<number> = new BehaviorSubject(0);



// stream$.subscribe((number: number) => {
//     console.log(number);
// })


// setTimeout(() => {
//     stream$.next(1)
// }, 2000)


// setTimeout(() => {
//     stream$.next(2)
// }, 5000)


// const source$ = interval(1000);


// source$.subscribe((number: number) => {
//     console.log(number);
// })


//emits any number of provided values in sequence
// const source2$ = of(1, 2, 3, 4, 5);
//output: 1,2,3,4,5
// source2$.subscribe(val => console.log(val));


// Example 

const url = 'https://api.github.com/search/repositories';
let searchInput = document.querySelector('#search');
let itemsContainer = document.querySelector('#items');
let total = document.querySelector('#total');
let progress = document.querySelector('progress.progress');
let progressService = new ProgressBar(progress as HTMLProgressElement)
listenSearch()



function listenSearch() {
    if(searchInput){
        fromEvent(searchInput, 'input')
        .pipe(
            pluck('target', 'value'),
            map((value: string) => value.trim()),
            distinctUntilChanged(),
            debounceTime(500),
            tap(() => {
                progressService.start();
                if(itemsContainer) itemsContainer.innerHTML = '';
            }),
            switchMap((value: string) => fromFetch(`${url}?q=${value}`, { headers: { 'Authorization': OAUTH_TOKEN} })),
            concatMap((response: Response) => from(response.json()))
        )
        .subscribe((data)=> {
            console.log(data);
            progressService.end();
            render(data.items, data.total_count)
        })
    }
}

function render(items: any[] = [], totalCount: number) {
    
    if(!itemsContainer) return;

    if(total && totalCount) {
        total.innerHTML = `: Founded <small>${totalCount}<small> items`
    }

    itemsContainer.innerHTML = items.map( (repo: any) => {

        return ` <a class="panel-block" href="${repo.html_url}" target="_blank">
                    <span class="panel-icon">
                        <img width="20" src="${repo.owner.avatar_url}">
                    </span>
                    <span>${repo.name}</span>
                </a>
        `
    }).join('');
}