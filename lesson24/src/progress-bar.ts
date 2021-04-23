import { Subscription, interval } from "rxjs";
import { tap } from "rxjs/operators";

export class ProgressBar {

    private _progress$: Subscription;
    
    public progressBar: HTMLProgressElement;

    constructor(progressBar: HTMLProgressElement) {
        this.progressBar = progressBar;
    }

    start() {
        this.progressBar.value = 0;
        
        this._progress$ = interval(30).pipe(
            tap(() => {
                if(this.progressBar.value < 90) {
                    this.progressBar.value+=1;
                }
             }),
          
        ).subscribe()
    }

    end() {
        this.progressBar.value = 100;
        this._progress$.unsubscribe();
    }
}