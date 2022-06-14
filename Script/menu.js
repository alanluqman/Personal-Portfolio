let collapsibleMenu = document.querySelector(".menu-slider");
function collapsible(){
    collapsibleMenu.classList.toggle("extended");
}
let menuBtn = document.querySelector("#menuBtn");
let xBtn = document.querySelector("#xBtn");
menuBtn.addEventListener("click",collapsible);
xBtn.addEventListener("click",collapsible);
