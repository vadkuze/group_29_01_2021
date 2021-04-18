class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn)
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(subscriber => subscriber !== fn);
    }

    broadcast(data) {
        this.observers.forEach(subscriber => subscriber(data))
    }
}

const observer = new EventObserver();
console.log('subscribe to 1');

let subscriber1 = data => {
    console.log('subscriber 1', data)
};

let subscriber2 = data => {
    console.log('subscriber 2', data)
};

observer.subscribe( subscriber1)

console.log('subscribe to 2');

observer.subscribe( subscriber2 )


setTimeout(()=> {
    observer.broadcast({ info: 'emitting' })
    observer.unsubscribe(subscriber2);
}, 3000)


setTimeout(()=> {
    observer.broadcast({ info: 'emitting2' })
}, 5000)