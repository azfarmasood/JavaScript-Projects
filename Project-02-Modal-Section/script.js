"use strict";
function ModalElements(className) {
    const classVariables = document.querySelector(className);
    return classVariables;
}
const modal = ModalElements('.modal');
const overlay = ModalElements('.overlay');
const btnCloseModal = ModalElements('.close-modal');
const btnOpenModal = document.querySelectorAll('.open-modal');
const OpenModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const CloseModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
console.log(btnOpenModal);
let i;
for (i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', OpenModal);
    btnCloseModal.addEventListener('click', CloseModal);
    overlay.addEventListener('click', CloseModal);
}
;
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape" && modal.classList.contains('.hidden') !== true) {
        CloseModal();
    }
});
