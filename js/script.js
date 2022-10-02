const openHamburger = document.querySelector(".open-hamburger-menu")
openHamburger.addEventListener("click", () => {
    document.querySelector(".hamburger-menu").style.display = "block"
})

const closeHamburger = document.querySelector(".close-hamburger-menu")
closeHamburger.addEventListener("click", () => {
    document.querySelector(".hamburger-menu").style.display = "none"
})