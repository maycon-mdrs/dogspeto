/* ---------------------------------------------------------- */
/* ------------------------ OPEN MODAL ---------------------- */
/* ---------------------------------------------------------- */

function showModal() {
    let modal = document.querySelector('.modal');
    modal.classList.add("show-modal");
    
    /* BLOCK SROLL */
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    closeModalOutside(modal, body);
}

/* ---------------------------------------------------------- */
/* ----------------------- CLOSE MODAL ---------------------- */
/* ---------------------------------------------------------- */

function hiddenModal() {
    let modal = document.querySelector('.modal');
    modal.classList.remove("show-modal");

    /* "DESBLOCK" SROLL */
    const body = document.querySelector("body");
    body.style.overflow = "auto";
}

/* https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_modal_close */
function closeModalOutside(modal, body) {
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.classList.remove("show-modal");
        }
      }
    /* "DESBLOCK" SROLL */
    body.style.overflow = "auto";
}

/* ---------------------------------------------------------- */
/* ------------ RESGATANDO TAMANHO MAIN - PÁGINA ------------ */
/* ---------------------------------------------------------- */

let widthPage = window.innerWidth
console.log(widthPage);

function ajustarTela(){
    widthPage = window.innerWidth;
    console.log(widthPage);
}
