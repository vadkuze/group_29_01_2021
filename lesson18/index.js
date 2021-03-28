
fetch('https://jsonplaceholder.typicode.com/photos/100000')
    .then(data => {
        return data.json();
    })
    .then(data => {
        console.log(data);
        let img = new Image(200, 200);
        img.src = data.url;

        document.body.append(img);
    })
    .catch((err) => {
        console.log(err);
    })
    

async function getImage(id) {
    let data;

    try {
        let response = await fetch(`httpsjsonplaceholder.typicode.com/photos/${id}`);
        data = await response.json();
    } catch (err) {
        if(err.name) {
            return err.name;
        }
    }

    return data
}

(async ()=> {
   console.log(await getImage(10));
})()


    let o = {
        test: 10
    }
    let str = JSON.stringify(o);
    console.log(
        JSON.parse(str)
    );

async function loadScript(url) {
    let script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
    return script;
}


async function getData() {
    return 1;
}

async function extractData () {
    let resultData = await getData()
    let result = await loadScript('../lesson17/scripts/one.js');
    return  {resultData, result}
}

extractData()

(async ()=> {
    let resultData = await getData()
    let result = await loadScript('../lesson17/scripts/one.js');
})()


try {
    let data = JSON.parse('{"test" 100}');
    console.log(data)
} catch(err) {
    if(err.name === 'SyntaxError') {
        console.log('Ошибка при парсинге ' + err.message );
    }
} 