const collapsibleMenu = document.querySelector('.menu-slider');
function collapsible() {
  collapsibleMenu.classList.toggle('extended');
}
const menuBtn = document.querySelector('#menuBtn');
menuBtn.addEventListener('click', collapsible);
const xBtn = document.querySelector('#xBtn');
xBtn.addEventListener('click', collapsible);
// popup-window.
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
    title: 'WeBrush',
    description: 'This is an eCommerce website, customers can visit it and choose their desired design.',
    image: './images/weBrush.JPG',
    featureList: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://alanluqman.github.io/WeBrush/',
    seeSource: 'https://github.com/alanluqman/WeBrush',
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
  },
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
// form validation.
const emailEl = document.querySelector('#email');
const isEmailValid = (email) => {
  const re = /^[a-z]+(([a-z]+([0-9]+)?\.?([0-9]+)?\.?))+([a-z0-9])@([a-z]+\.?)+[a-z]{2,}$/;
  return re.test(email);
};
const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isEmailValid(email)) {
    document.querySelector('#errorCheck').innerHTML = '* Invalid Email entered ! please Enter valid email.';
  } else {
    document.querySelector('#errorCheck').innerHTML = '';
    valid = true;
  }
  return valid;
};
const form = document.querySelector('#contact_me');
form.addEventListener('submit', (e) => {
  // prevent the form from submitting
  e.preventDefault();
  // validate forms
  const isEmailValid = checkEmail();
  // submit to the server if the form is valid
  if (isEmailValid) {
    form.submit();
  }
});
// Local storage
const dataStorage = {
  full_name: '',
  email_address: '',
  message_text: '',
};

function setStyles() {
  const fullName = JSON.parse(localStorage.getItem('form_data')).full_name;
  document.querySelector('#fullname').value = fullName;
  const emailAddress = JSON.parse(localStorage.getItem('form_data')).email_address;
  document.querySelector('#email').value = emailAddress;
  const messageText = JSON.parse(localStorage.getItem('form_data')).message_text;
  document.querySelector('#message').value = messageText;
}

setStyles();
function populateStorage() {
  dataStorage.full_name = document.querySelector('#fullname').value;
  dataStorage.email_address = document.querySelector('#email').value;
  dataStorage.message_text = document.querySelector('#message').value;
  const storedData = JSON.stringify(dataStorage);
  localStorage.setItem('form_data', storedData);
  setStyles();
}

document.querySelector('#fullname').addEventListener('change', populateStorage);
document.querySelector('#email').addEventListener('change', populateStorage);
document.querySelector('#message').addEventListener('change', populateStorage);
