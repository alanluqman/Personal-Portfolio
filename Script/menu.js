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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply ummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/img-placeholder.svg',
    featureList: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://alanluqman.github.io/Personal-Portfolio/',
    seeSource: 'https://github.com/alanluqman/Personal-Portfolio',
  },
  {
    title: 'First Project',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply ummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/project.jpg',
    featureList: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://alanluqman.github.io/Personal-Portfolio/',
    seeSource: 'https://github.com/alanluqman/Personal-Portfolio',
  },
  {
    title: 'Second Project',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply ummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/project.jpg',
    featureList: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://alanluqman.github.io/Personal-Portfolio/',
    seeSource: 'https://github.com/alanluqman/Personal-Portfolio',
  },
  {
    title: '3rd Project',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply ummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/project.jpg',
    featureList: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://alanluqman.github.io/Personal-Portfolio/',
    seeSource: 'https://github.com/alanluqman/Personal-Portfolio',
  },
  {
    title: '4th Project',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply ummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/project.jpg',
    featureList: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://alanluqman.github.io/Personal-Portfolio/',
    seeSource: 'https://github.com/alanluqman/Personal-Portfolio',
  },
  {
    title: '5th Project',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply ummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/project.jpg',
    featureList: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://alanluqman.github.io/Personal-Portfolio/',
    seeSource: 'https://github.com/alanluqman/Personal-Portfolio',
  },
  {
    title: '6th Project',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply ummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: 'images/project.jpg',
    featureList: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://alanluqman.github.io/Personal-Portfolio/',
    seeSource: 'https://github.com/alanluqman/Personal-Portfolio',
  }
];
const popUpWindow = document.querySelector('.popup-window');
function popUp(index) {
  popUpWindow.classList.add('popUp');
  document.querySelector('#popup-header').innerHTML = projects[index].title;
  document.querySelector('#popup-description').innerHTML = projects[index].description;
  document.querySelector('#popup-image').src = `${projects[index].image}`;
  document.querySelector('#seeLivePopup').href = projects[index].seeLive;
  document.querySelector('#seeSourcePopup').href = projects[index].seeSource;
}

function popUpClose() {
popUpWindow.classList.remove('popUp');
}

const closePopUpWindow = document.querySelector('#closePopup');
closePopUpWindow.addEventListener('click', popUpClose);
const seeProject = document.querySelectorAll('.pop');
seeProject.forEach((element) => {
  element.addEventListener('click', () => {
    popUp(element.dataset.id);
  });
});
