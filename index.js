const navBtn= document.querySelector (".nav-btn")
const navMenu= document.querySelector (".nav-menu")

navBtn.addEventListener("click", function() {
    navMenu.classList.toggle("nav-menu-visible");
});