const url = 'https://jsonplaceholder.typicode.com/';
const photoUrl = 'photos';
let photoHistory = [];

let photContainer = document.querySelector('.photo-container');
let request = document.querySelector('#request');
let add = document.querySelector('#add');
let photoInput = document.querySelector('#photoInput');

request.addEventListener('click', main);
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
        return fetch(`${url}${photoUrl}/${id}`)
            .then(response => {
                if(response.status == 404) {
                    throw new Error('Image not found');
                } else if(response.status != 200) {
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

function loadImage(data) {
    return new Promise(function (resolve, reject) {
        let image = new Image();
        image.src = data.url;
        image.onload = () => resolve({
            image,
            data
        });
        image.onerror = () => reject();
    })
}
