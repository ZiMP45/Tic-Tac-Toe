const openModalButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('overlay');
const startButton = document.querySelector(".start");

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

// factory function stuff? Not super great. So far selects value from button, trying to create object with
// player name and chosen character but don't have that yet
// will print out the game board as well once I figure out the object part

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