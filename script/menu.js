
const menu = document.querySelector("#menu")

const navegation = document.querySelector("nav ul")

menu.addEventListener('click', openMenu)

function openMenu() {

    if (navegation.classList.contains('active')) {
        navegation.classList.remove('active')
    }
    else {
        navegation.classList.add('active')
    }
}