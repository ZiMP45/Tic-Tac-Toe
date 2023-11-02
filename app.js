const openModalButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('overlay');
const startButton = document.querySelector(".start");
const board = document.querySelector(".gameboard");
const playerx = document.querySelector('#xplayer');
const playery = document.querySelector('#yplayer');

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

function drawBoard() {
    for (let i = 0; i < 9; i++) {
        const el = document.createElement('div');
        el.classList.add("square");
        el.textContent = "";
        board.append(el);
    }
}

function playerObj() {
    let name = document.getElementById('name').value;
    let xValue = playerx.dataset.player;
    let player = {playerName: name, playerCard: xValue};
    return player;
}

function dostuff() {
    closeModal(modal);
    startButton.remove();
    drawBoard();
    console.log(playerObj());
}