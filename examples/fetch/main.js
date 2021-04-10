const url = 'https://fakestoreapi.com/';
const productsUrl = 'products';
let photoHistory = [];

let photContainer = document.querySelector('.photo-container');
let request = document.querySelector('#request');
let send = document.querySelector('#send');
let add = document.querySelector('#add');
let photoInput = document.querySelector('#photoInput');

request.addEventListener('click', main);
send.addEventListener('click', function () {
    let id = photoInput.value;
    sendData(id);
});

photoInput.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        main();
    } else {
        event.preventDefault();
    }
});


function main() {

    let id = photoInput.value;
    photoInput.disabled = true;


    fetchImageById(id)
        .then(({
            image,
            data
        }) => {
            photContainer.append(image);
            photoHistory.push(data);
            toastr.success('Success!')
        })
        .catch(error => {
            toastr.error(error.message, error.name)
        })
        .finally(() => {
            photoInput.disabled = false;
            photoInput.focus();
        })
}

function fetchImageById(id) {
    if (id) {
        return fetch(`${url}${productsUrl}/${id}`)
            .then(response => {
                if (response.status == 404) {
                    throw new Error('Image not found');
                } else if (response.status != 200) {
                    throw new Error('HttpError');
                }

                return response.json();
            })
            .then(data => {
                return loadImage(data);
            })
    }

    return Promise.reject(new Error('Enter ID please'));
}

async function loadImage(data) {
    let image = new Image();
    image.src = data.image + '1';
    try {
        await image.decode();
    } catch (err) {
        console.log(err);
        throw err;
    }
    return {
        image,
        data
    }
}

function sendData(id) {
    let tastDataForSend = {
        title: "Test Data",
    };

    return fetch(`${url}${productsUrl}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tastDataForSend)
    })
}