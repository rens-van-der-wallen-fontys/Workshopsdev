var Wormpie = document.getElementById("Worm");

document.addEventListener("DOMContentLoaded", function(event) {
    var WormX = Math.floor(Math.random() * 1750);
    var WormY = Math.floor(Math.random() * 800);

    Wormpie.style.left = WormX + "px";
    Wormpie.style.top = WormY + "px"; 
    Wormpie.classList.add("ShowImg");
});