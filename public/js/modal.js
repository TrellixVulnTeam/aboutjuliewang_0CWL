
const openModalBtn = document.querySelector("#open-modal-btn")
const closeModalBtn = document.querySelector("#close-modal-btn")


openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

function openModal() {
    const modal = document.querySelector("#modal")
    modal.classList.add("open")
}
function closeModal() {
    const modal = document.querySelector("#modal")
    modal.classList.remove("open")
}
