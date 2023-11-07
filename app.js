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

function doStuff() {
    const grid = document.getElementById('game-board');
    const startButton = document.querySelector('.start');
    const gameContainer = document.querySelector('.game');    

    for (let i = 0; i < 9; i++) {
        const el = document.createElement('div');
        el.classList.add('cell');
        grid.appendChild(el);
    }

    const statusDiv = document.createElement('div');
    statusDiv.setAttribute('id', 'status');
    gameContainer.appendChild(statusDiv);

    const restart = document.createElement('button');
    restart.setAttribute('id', 'restart-button');
    restart.textContent = 'Restart Game';
    gameContainer.appendChild(restart);


    closeModal(modal);
    startButton.remove();

    const playerX = createPlayer("Player X", "X");
    const playerO = createPlayer("Player O", "O");
    let currentPlayer = playerX;
    const gameBoard = createGameBoard();

    const cells = document.querySelectorAll(".cell");
    const status = document.getElementById("status");
    const restartButton = document.getElementById("restart-button");

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

