let media = window.matchMedia("(max-width: 1000px)");
function openMenu() {
    if (media.matches) {
        document.querySelector(".sidebar").style.display = "block";
    }
}
  
function closeMenu() {
    if (media.matches) { 
        document.querySelector(".sidebar").style.display = "none";
    } else {
        document.querySelector(".sidebar").style.display = "block";
    }
}

document.querySelector(".openbtn").addEventListener("click", openMenu);
document.querySelector(".closebtn").addEventListener("click", closeMenu)