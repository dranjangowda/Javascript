'use strict'
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".close-modal")
const btnOpenModal = document.querySelectorAll(".show-modal")

//to select all the buttons 
//in querryselector you only choose one button but in querry selecto all you can choose all the 3 buttons
console.log(btnOpenModal)


const openModal = function () {
    console.log("working")
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}


for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener("click", openModal)
}


btnCloseModal.addEventListener("click", closeModal)
// we dont call the funciton here we just tell javascript that whenever we click the button to call the function
overlay.addEventListener("click", closeModal)

//key handling method
document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal()
        }
    }
})