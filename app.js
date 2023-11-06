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

