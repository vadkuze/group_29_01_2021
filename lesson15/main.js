// Событие – это сигнал от браузера о том, что что-то произошло. 
// Все DOM-узлы подают такие сигналы (хотя события бывают и не только в DOM).



// ----------------
// События мыши:
// click – происходит, когда кликнули на элемент левой кнопкой мыши (на устройствах с сенсорными экранами оно происходит при касании).
// contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши.
// mouseover / mouseout – когда мышь наводится на / покидает элемент.
// mousedown / mouseup – когда нажали / отжали кнопку мыши на элементе.
// mousemove – при движении мыши.

// События на элементах управления:

// submit – пользователь отправил форму <form>.
// focus – пользователь фокусируется на элементе, например нажимает на <input>.
// blur, input ...

// Клавиатурные события:

// keydown и keyup – когда пользователь нажимает / отпускает клавишу.

// События документа:

// DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.

// CSS events:

// transitionend – когда CSS-анимация завершена.
// -----------------


// Есть 3 способа поставить обработчик
// атрибут, через свойство (Обработчик всегда хранится в свойстве DOM-объекта, 
// Так как у элемента DOM может быть только одно свойство с именем onclick, то назначить более одного обработчика так нельзя.)
// через ф-цию addEventListener
let btn = document.querySelector('#btn');
// let  removeBtn = document.querySelector('#btn-remove');
// function handleClick(event) {
//     event = event || window.event;

//     console.log('clicked', event);
// }

// btn.onclick = function(e) {
//     console.log('clicked', e);
// }

// btn.addEventListener('click', handleClick);

// removeBtn.addEventListener('click', function () {
//     btn.removeEventListener('click', handleClick);
// });

// Мы хотим назначить два обработчика для этого. Но новое DOM-свойство перезапишет предыдущее
// Альтернативный способ назначения обработчиков при помощи специальных методов addEventListener и removeEventListener. 

// event
// Имя события, например "click".

// handler
// Ссылка на функцию-обработчик.
// options

// Дополнительный объект со свойствами:
// once: если true, тогда обработчик будет автоматически удалён после выполнения.
// capture: фаза, на которой должен сработать обработчик, Всплытие и погружение. 
// Так исторически сложилось, что options может быть false/true, это то же самое, что {capture: false/true}.
// passive: если true, то указывает, что обработчик никогда не вызовет preventDefault(), Действия браузера по умолчанию.

// Они свободны от указанного недостатка.
// Удаление требует именно ту же функцию


// Когда происходит событие, браузер создаёт объект события, записывает в него детали и 
// передаёт его в качестве аргумента функции-обработчику.
// event можно получить и глобально

// Если addEventListener получает объект в качестве обработчика, он вызывает object.handleEvent(event), когда происходит событие.
// Мы также можем использовать класс для этого

// class Button {
//     constructor(elem) {
//         this.elem = elem;
//     }
//     handleEvent(event) {
//         switch (event.type) {
//             case 'click':
//                 this.elem.innerHTML = "Нажата кнопка " + Math.random();
//                 break;
//         }
//     }
// }
// let btmInstance = new Button(btn)
// btn.addEventListener('mouseover', btmInstance);

// ________________________________________________________________________________________________________________
// Всплытие
let container = document.querySelector('#container');

let elements = [],
    elem = container;

while (elem.firstElementChild) {
    elem = elem.firstElementChild;
    elements.push(elem);
}

elements.forEach(elem => {
    // elem.onclick = function(e) {
    //     console.log(this.tagName);
    // }
    elem.addEventListener('click', function (e) {
        console.log('tagName', this.tagName);
        console.log('Event currentTarget', e.currentTarget);
        console.log('Event this', this);
        console.log('Event target', e.target);
        if(this.tagName === "SPAN") {
            e.stopPropagation();
        }
    }, false)

})
// Принцип всплытия очень простой.
// Когда на элементе происходит событие, обработчики сначала срабатывают на нём, 
// потом на его родителе, затем выше и так далее, вверх по цепочке предков.
// Например, есть 3 вложенных элемента FORM > DIV > P

// Почти все события всплывают.

// Самый глубокий элемент, который вызывает событие, называется целевым элементом, и он доступен через event.target.
// Отличия от this ( = event.currentTarget):
// event.target – это «целевой» элемент, на котором произошло событие, в процессе всплытия он неизменен.
// this – это «текущий» элемент, до которого дошло всплытие, на нём сейчас выполняется обработчик.

// Всплытие идёт с «целевого» элемента прямо наверх. По умолчанию событие будет всплывать до элемента <html>, а затем до объекта document, а иногда даже до window, вызывая все обработчики на своём пути.
// Но любой промежуточный обработчик может решить, что событие полностью обработано, и остановить всплытие.
// Для этого нужно вызвать метод event.stopPropagation().

// event.stopPropagation() препятствует продвижению события дальше, но на текущем элементе все обработчики будут вызваны.
// Для того, чтобы полностью остановить обработку, существует метод event.stopImmediatePropagation(). 
// Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе.

// Погружение

// Стандарт DOM Events описывает 3 фазы прохода события:

// Фаза погружения (capturing phase) – событие сначала идёт сверху вниз.
// Фаза цели (target phase) – событие достигло целевого(исходного) элемента.
// Фаза всплытия (bubbling stage) – событие начинает всплывать.

// Обработчики, добавленные через on<event>-свойство или через HTML-атрибуты, 
// или через addEventListener(event, handler) с двумя аргументами, ничего не знают о фазе погружения, 
// а работают только на 2-ой и 3-ей фазах.

// Чтобы поймать событие на стадии погружения, нужно использовать третий аргумент capture
// Если аргумент false (по умолчанию), то событие будет поймано при всплытии.
// Если аргумент true, то событие будет перехвачено при погружении.



// Отменить действие по умолчанию, которое связанно с событием.
//  e.preventDefault();

// let form = document.querySelector('.form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(e);
// })

// let ul = document.querySelector('#ul');

// ul.addEventListener('mousedown', function (e) {
//     e.preventDefault();
// })

// ul.addEventListener('click', function (e) {
//     console.log(e);

//     if (e.target == this) {
//         return false;
//     }
    
//     if (!e.altKey) {
//         clearSelected(this.children);
//     }
//     addSelected(e.target);
// })

// function clearSelected(elems) {
//     for (let elem of elems) {
//         console.log(elem.classList.remove('selected'));
//     }
// }

// function addSelected(target) {
//     target.classList.add('selected');
// }
// let menu = document.querySelector('#menu');

// class Menu {
//     constructor(elem) {
//       this._elem = elem;
//       elem.onclick = this.onClick.bind(this); // (*)
//     }

//     save() {
//       alert('сохраняю');
//     }

//     load() {
//       alert('загружаю');
//     }

//     search() {
//       alert('ищу');
//     }

//     onClick(event) {
//       let action = event.target.dataset.action;
//       if (action) {
//         this[action]();
//       }
//     };
//   }

// console.log(new Menu(menu));

// Всплытие и перехват событий позволяет реализовать один из самых важных приёмов разработки – делегирование.
// Алгоритм:
// Вешаем обработчик на контейнер.
// В обработчике проверяем исходный элемент event.target.
// Если событие произошло внутри нужного нам элемента, то обрабатываем его.