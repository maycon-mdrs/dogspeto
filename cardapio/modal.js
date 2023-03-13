/* ---------------------------------------------------------- */
/* ------------------------ OPEN MODAL ---------------------- */
/* ---------------------------------------------------------- */
var open = false;
function openModal() {
    let modal = document.querySelector('.modal-content');
    modal.style.display = 'block';
    console.log("abrir modal");
    open = true;
}

/* ---------------------------------------------------------- */
/* ----------------------- CLOSE MODAL ---------------------- */
/* ---------------------------------------------------------- */
function closeModal() {
    let modal = document.querySelector('.modal-content');
    modal.style.display = 'none';
    console.log("fehcar modal");
    open = false;
}

/* MODAL - INSTRUÇÕES */
function showModal() {
    let modal = document.querySelector('.modal');
    modal.classList.add("show-modal");
}

function hiddenModal() {
    let modal = document.querySelector('.modal');
    modal.classList.remove("show-modal");
}

