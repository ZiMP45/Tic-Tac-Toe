const openModalButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('overlay');
const startButton = document.querySelector(".start");

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

// gets the job done, want to look into something else, doesn't use an array to store player
// selections within it

function game(a) {
    let name = document.querySelector('#name').value;
    let target = a.getAttribute('data-player');
    let board = document.querySelector(".gameboard");
    
    return {
        player: {name, target},
        drawBoard: function () {
            for (let i = 0; i < 9; i++) {
                const el = document.createElement('div');
                el.classList.add("square");
                el.textContent = "";
                board.append(el);

                closeModal(modal);
                startButton.remove();
            }
        }
    };
}