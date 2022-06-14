const collapsibleMenu = document.querySelector('.menu-slider');
function collapsible() {
  collapsibleMenu.classList.toggle('extended');
}
const menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click', collapsible);
const xBtn = document.querySelector('#xBtn');
xBtn.addEventListener('click', collapsible);
