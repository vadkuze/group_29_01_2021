// function loadScript(url, callback) {
//     let script = document.createElement('script');
//     script.src = url;
//     document.body.appendChild(script);
//     script.onload = () => {
//         callback(null, true)
//     };
//     script.onerror = (error) => {
//         callback(error, null)
//     };
// }

// loadScript('./scripts/one.js', function(error, data){
//     if(error) {
//         console.log('Error');
//         return;
//     }

//     loadScript('./scripts/two.js', function(error, data){
//         loadScript('./scripts/three.js', function(error, data){
//             three();
//         })
//     })
// });

function loadScript(url) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = url;
        document.body.appendChild(script);
        script.onload = resolve;
        script.onerror = reject;
    })
}

// loadScript('./scripts/one.js')
//     .then((data) => {
//         one();
//         return loadScript('./scripts/two.js');
//     })
//     .then((data) => {
//         two();
//         return loadScript('./scripts/three.js');
//     })
//     .then((data) => {
//         three();
//     })
//     .catch((error) => {
//         console.log(error.target.src);
//     })
//     .finally(() => {
//         console.log('finally');
//     })


// console.log(navigator.geolocation.getCurrentPosition( (data)=> {
//     console.log(data);
// }, (error)=> {
//     console.log(error);
// }, ));


// navigator.getBattery()
//          .then(console.log)


function resolvedPromise() {
    return Promise.resolve('resolved');
}

resolvedPromise().then(console.log);


let multiPromise = Promise.allSettled([
    loadScript('./scripts/two.js'),
    resolvedPromise(),
    Promise.reject('reject')
]);

multiPromise
.then(console.log)
.catch(console.log)