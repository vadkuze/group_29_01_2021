class DOMManipulator {

    find(selector, container = document) {
        let found = container.querySelectorAll(selector);
        return found.length === 1 ? found[0] : found;
    }
}

class Grid extends DOMManipulator{
    constructor({boxSize, borderSize, gridCount, gridCssCellClass, gridContainer}) {
        super();

        this.boxSize = boxSize; 
        this.borderSize = borderSize;
        this.gridCount = gridCount;
        this.gridCssCellClass = gridCssCellClass;
        this.gridContainer = this.find(gridContainer);

        this.#_init();
    }

    #_init() {
        this.gridContainer.style.width = this.gridContainer.style.height = (this.boxSize * this.gridCount) + 'px';

        for (let index = 0; index < this.gridCount; index++) {
            this.gridContainer.append(this.#_createRow(index))
        }
    }

    #_createRow(row) {
        let fragment = new DocumentFragment();
        for (let index = 0; index < this.gridCount; index++) {
            fragment.append(this.#_createCell(row, index))
        }
        return fragment;
    }

    #_createCell(row, cell) { 
        const div = document.createElement('div');
        div.classList.add(this.gridCssCellClass);
        div.setAttribute('data-cell', cell);
        div.setAttribute('data-row', row);
        div.style.width = div.style.height = (this.boxSize - this.borderSize) + 'px';
        return div;
    }

}

class Snake extends Grid {

    #_snake = null;
    #_processGame = null;
    #_score = 0;
    #_food = null;
    #_controlsForm = this.find('#snake-controls-form');
    #_startBtn = this.find('#snake-start-game');
    #_endBtn = this.find('#snake-end-game');
    #_messageBox = this.find('#snake-message');
    #_scoreContainer = this.find('#snake-container');

    constructor({boxSize, borderSize,gridCount, foodUrl}) {
        super({boxSize, borderSize, gridCount, gridCssCellClass: 'snake-cell', gridContainer: '#snake-container'});

        this.speed = 500;
        this.direction = 'left';
        this.foodUrl = foodUrl;

        this.#_init()
    }

    startGame(){
        this.#_snake = this.#_createSnake(Math.floor(this.gridCount / 2), Math.floor(this.gridCount / 2), 5 );

        // вызвать здесь generateBoxForEat, который вставляет картинку еды в рандомной поле  
        
        

        this.speed = this.#_controlsForm.speed.value;
        this.#_messageBox = 'Welcome to Snake!';
        // hide buttons

        this.#_processGame = setInterval(() => {

            // ----------------------------------
            // вызвать здесь  метод noWallMode, который реализует возможность змейки проходить через стены  
            // Нужно чтобы метод noWallMode работала так
            // let {
            //     cell,
            //     row
            // } = noWallMode(snake[0])
            // ----------------------------------

            let { cell, row } = this.#_snake[0];

            switch(this.direction) {
                case 'left': {
                    this.#_snake.unshift({
                        cell: cell -1,
                        row
                    })
                } break;

                case 'up': {
                    this.#_snake.unshift({
                        cell,
                        row: row - 1
                    })
                } break;

                case 'right': {
                    this.#_snake.unshift({
                        cell: cell + 1,
                        row
                    })
                } break;

                case 'down': {
                    this.#_snake.unshift({
                        cell,
                        row: row +1
                    })
                } break;
            }

            this.#_clear();
            this.#_update();

        }, this.speed)

    }

    /* ----------------------------------
    Дополнить метод endGame - вернуть все данные в начальное состояние

    Используйте метод во всех случаях, где игра завершается
    ---------------------------------- */
    endGame(){


        clearTimeout(this.#_processGame);

        setTimeout(() => {
            this.#_clear()
        }, 1000)
    }

    #_init(){
        document.addEventListener('keydown', (event) => this.#_updateDirection(event));
        this.#_startBtn.addEventListener('click', (event) => this.startGame(event));
        this.#_endBtn.addEventListener('click', (event) => this.endGame(event));
    }

    #_updateDirection(keyboardEvent) {
        
        if(keyboardEvent.keyCode == 37 && this.direction != 'right') this.direction = 'left';
        else if(keyboardEvent.keyCode == 38 && this.direction != 'down') this.direction = 'up';
        else if(keyboardEvent.keyCode == 39 && this.direction != 'left') this.direction = 'right';
        else if(keyboardEvent.keyCode == 40 && this.direction != 'up') this.direction = 'down';
    
        console.log(this.direction);
    }

    #_createSnake(startCell, startRow, count) {
        let arr = [];

        for (let index = 0; index < count; index++) {
            arr.push({
                cell: startCell + index,
                row: startRow,
            })
        }

        return arr;
    }

    #_clear() {
        let cells = this.find('.snake', this.gridContainer);

        for(const cell of cells) {
            cell.className = this.gridCssCellClass;
        }
    }

    #_update() {

        // ---------------------------------------
        // вызвать здесь метод checkOnEated, которая проверяет съела ли змейка еду,
        // если да - убираем фрукт добавляет +1 в хвост и в score, а также генерируем новые координаты для еды
        // ----------------------------------


        // ----------------------------------
        // вызвать здесь метод checkOnTailCrush, который проверяет врезалась ли голова змейки в себя же, если да - завершить игру
        // ---------------------------------------

        for(const [index, snakePart] of this.#_snake.entries()) {
            let cell = this.#_findByCoords(snakePart.cell, snakePart.row);
            console.log(snakePart);
            if(index == 0) {
                cell.classList.add('snake-head');
            } else {
                cell.classList.add('snake-body');
            }
        }
    }

    #_findByCoords(cell, row) {
        return this.find(`[data-cell="${cell}"][data-row="${row}"]`, this.gridContainer)
    }
}


new Snake({
    boxSize: 32,
    borderSize: 2,
    gridCount: 13,
    foodUrl: './img/apple.png'
})