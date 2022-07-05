
const menu = document.querySelector("#menu")

const navegation = document.querySelector("nav ul")

const imageMenu = document.querySelector("#menu img")

menu.addEventListener('click', openMenu)

function openMenu() {

    if (imageMenu.getAttribute('src') === 'img/menu.png') {
        imageMenu.setAttribute('src', 'img/close.png')
    }
    else {
        imageMenu.setAttribute('src', 'img/menu.png')
    }
    navegation.classList.toggle('active')
}