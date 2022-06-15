const collapsibleMenu = document.querySelector('.menu-slider');
function collapsible() {
  collapsibleMenu.classList.toggle('extended');
}
const menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click', collapsible);
const xBtn = document.querySelector('#xBtn');
xBtn.addEventListener('click', collapsible);
const projects = [
  {
    title: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply ummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/img-placeholder.svg',
    featureList: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://alanluqman.github.io/Personal-Portfolio/',
    seeSource: 'https://github.com/alanluqman/Personal-Portfolio',
  },
];
const popUpWindow = document.querySelector('.popup-window');
function popUp() {
  popUpWindow.classList.toggle('popUp');
  document.querySelector('#popup-header').innerHTML = projects[0].title;
  document.querySelector('#popup-description').innerHTML = projects[0].description;
  document.querySelector('#popup-image').src = `${projects[0].image}`;
  document.querySelector('#seeLivePopup').href = projects[0].seeLive;
  document.querySelector('#seeSourcePopup').href = projects[0].seeSource;
}

const closePopUpWindow = document.querySelector('#closePopup');
closePopUpWindow.addEventListener('click', popUp);

const seeProject = document.querySelectorAll('.pop');
for (const item of seeProject) {
  item.addEventListener('click', popUp);
}