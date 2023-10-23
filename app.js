const openModalButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('overlay');

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

function createElements(type) {
    let board = document.querySelector(".gameboard");
    const startButton = document.querySelector(".start");

    for (let i = 0; i < 9; i++) {
        const el = document.createElement(type);
        el.classList.add("square");
        board.append(el);
    }

    closeModal(modal);
    startButton.remove();
}