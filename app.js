const openModalButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('overlay');

// functionality for modal 

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal);
    })
})

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

// functions for other stuff

function createPlayer (name, marker) {
    return {
        name,
        marker,
    };
}

function createGameBoard() {
    // initialize empty array for board
    let board = new Array(9).fill(null);

    function makeMove(index, marker) {
        if (!board[index]) {
            board[index] = marker;
            return true;
        }
        return false;
    }

    function isFull() {
        return board.every((cell) => cell !== null);
    }
    
    // winning combos to check board against
    function checkWin(marker) {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        return winningCombos.some((combo) => 
            combo.every((index) => board[index] === marker)
        );
    }

    function getBoard() {
        return [...board];
    }

    // reset array
    function reset() {
        board = new Array(9).fill(null);
    }

    return {
        makeMove,
        isFull, 
        checkWin,
        getBoard,
        reset,
    };
}

function doStuff(thing1, thing2) {
    const grid = document.getElementById('game-board');
    const startButton = document.querySelector('.start');
    const gameContainer = document.querySelector('.game');
    const playerOneName = thing1;
    const playerTwoName = thing2;

    // DOM creation of cells, organized into 3x3 grid
    for (let i = 0; i < 9; i++) {
        const el = document.createElement('div');
        el.classList.add('cell');
        grid.appendChild(el);
    }

    // status and restart button divs
    const statusDiv = document.createElement('div');
    statusDiv.setAttribute('id', 'status');
    gameContainer.appendChild(statusDiv);

    const restart = document.createElement('button');
    restart.setAttribute('id', 'restart-button');
    restart.textContent = 'Restart Game';
    gameContainer.appendChild(restart);

    // closemodal and get rid of start button
    closeModal(modal);
    startButton.remove();

    // assign input fields to player markers
    const playerX = createPlayer(playerOneName, "X");
    const playerO = createPlayer(playerTwoName, "O");
    let currentPlayer = playerX;
    const gameBoard = createGameBoard();

    const cells = document.querySelectorAll(".cell");
    const status = document.getElementById("status");
    const restartButton = document.getElementById("restart-button");

    // on click of cell play through a round, input marker if empty cell, and check if there's a winner
    function handleCellClick(index) {
        if(!gameBoard.isFull() && !gameBoard.checkWin(currentPlayer.marker)) {
            if(gameBoard.makeMove(index, currentPlayer.marker)) {
                cells[index].textContent = currentPlayer.marker;
                if(gameBoard.checkWin(currentPlayer.marker)) {
                    status.textContent = `${currentPlayer.name} wins!`;
                } else if (gameBoard.isFull()) {
                    status.textContent = "It's a draw!";
                } else {
                    currentPlayer = currentPlayer === playerX ? playerO : playerX;
                    status.textContent = `Current player: ${currentPlayer.name}`;
                }
            }
        }
    }

    // resets game on button click
    function restartGame() {
        gameBoard.reset();
        cells.forEach((cell) => (cell.textContent = ""));
        status.textContent = `Current player: ${currentPlayer.name}`;
        currentPlayer = playerX;
    }

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => handleCellClick(index));
    });

    restartButton.addEventListener("click", restartGame);

    status.textContent = `Current player: ${currentPlayer.name}`;
}

document.getElementById("myForm").reset();

