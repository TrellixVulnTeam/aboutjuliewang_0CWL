
const openModalBtn = document.querySelector("#open-modal-btn")
const closeModalBtn = document.querySelector("#close-modal-btn")
const modal = document.querySelector("#modal")
const overlay = document.querySelector("#overlay")



openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

function openModal() {
    modal.classList.add("open")
    overlay.classList.add("open")
    console.log(openModalBtn)
}

function closeModal() {
    const modal = document.querySelector("#modal")
    modal.classList.remove("open")
    overlay.classList.remove("open")

}
