let media = window.matchMedia("(max-width: 1000px)");
function openMenu() {
    if (media.matches) {
        document.querySelector("#sidebar").classList.add("display");
    }
}
  
function closeMenu() {
    if (media.matches) { 
        document.querySelector("#sidebar").classList.remove("display");
    } 
}

document.querySelector(".openbtn").addEventListener("click", openMenu);
document.querySelector("#sidebar").addEventListener("click", closeMenu)