const openModalButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('overlay');
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const board = document.querySelector(".gameboard");
const playerx = document.querySelector('#xplayer');
const playery = document.querySelector('#yplayer');
let gameArr = new Array(9);

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

// draws gameboard, adds class, adds eventlistener for when square is clicked, inputs playercard when clicked
function drawBoard(player) {
    for (let i = 0; i < 9; i++) {
        const el = document.createElement('div');
        el.classList.add("square");
        el.setAttribute('data-index', i);
        el.addEventListener('click', () => {
            gameArr[i] = player.playerCard;
            el.innerHTML = gameArr[i];
        });
        board.append(el);
    }
}

function playerObj() {
    let name = document.getElementById('name').value;

    let card = playerx.dataset.player;
    let player = {playerName: name, playerCard: card};
    return player;
}

function dostuff() {
    playerObj();
    closeModal(modal);
    player1.remove();
    player2.remove();
    drawBoard(playerObj());
}