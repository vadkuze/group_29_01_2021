class CounterService {
    static instance = null;
    counterValue = 0;
    constructor() {}

}

class DITree {

    getCounterService() {
        if(!CounterService.instance) {
            CounterService.instance = new CounterService();
        }

        return CounterService.instance;
    }
}

let di = new DITree();

console.log(di.getCounterService().counterValue);
di.getCounterService().counterValue = 5;
console.log(di.getCounterService().counterValue);
// di.getCounterService().counterValue = 10;
console.log(di.getCounterService().counterValue);

