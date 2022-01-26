const openNav = document.querySelector('.header__menu-image');
const navigation = document.querySelector('.header__navigation');
const logo = document.querySelector('.header__place-logo');
const menu = document.querySelector('.header__menu-image');
const closeButtot = document.querySelector('.header__close-novigation');

const imageGallery = document.querySelector('.gallery__image');
const gallery = [
    {
        name: 'кузов авто',
        link: '../images/auto1.jpg'
    },
    {
        name: 'водительское место',
        link: '../images/auto2.jpg'
    },
    {
        name: 'салон',
        link: '../images/auto3.jpg'
    }
]
const buttonPrev = document.querySelector('#prev');
const buttonNext = document.querySelector('#next');

const buttonOneMedia = document.querySelector('#one');
const buttonTwoMedia = document.querySelector('#two');
const spanSubtitle = document.querySelector('.media__span-accent');
const textSubtitle = document.querySelector('.media__subtitle');
const linkMedia = document.querySelector('.media__link-button');

openNav.addEventListener('click', function () {
    navigation.classList.add('header__navigation-open');
    menu.classList.add('header__menu-close');
    logo.classList.add('header__close-logo');
    closeButtot.classList.add('header__close-button');
});

closeButtot.addEventListener('click', function () {
    navigation.classList.remove('header__navigation-open');
    menu.classList.remove('header__menu-close');
    logo.classList.remove('header__close-logo');
    closeButtot.classList.remove('header__close-button');
});

imageGallery.src = gallery[0].link;
imageGallery.alt = gallery[0].name;
imageGallery.current = 0;

buttonNext.addEventListener('click', function () {
    
    if(imageGallery.current < gallery.length - 1){
        imageGallery.current++;
        imageGallery.src = gallery[imageGallery.current].link;
        imageGallery.alt = gallery[imageGallery.current].name;
    }  
})

buttonPrev.addEventListener('click', function () {
    
    if(imageGallery.current > 0){
        imageGallery.current--;
        imageGallery.src = gallery[imageGallery.current].link;
        imageGallery.alt = gallery[imageGallery.current].name;
    }  
})

buttonOneMedia.classList.add('media__subtitle-button_active');
spanSubtitle.textContent = "Engadget: ";
textSubtitle.textContent = "VW’s e-BULLI concept shows how your classic van can become an EV.";
linkMedia.href = "https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html";

buttonOneMedia.addEventListener('click', function () {
    buttonTwoMedia.classList.remove('media__subtitle-button_active');
    buttonOneMedia.classList.add('media__subtitle-button_active');
    spanSubtitle.textContent = "Engadget: ";
    textSubtitle.textContent = "VW’s e-BULLI concept shows how your classic van can become an EV.";
    linkMedia.href = "https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html";
})

buttonTwoMedia.addEventListener('click', function () {
    buttonOneMedia.classList.remove('media__subtitle-button_active');
    buttonTwoMedia.classList.add('media__subtitle-button_active');
    spanSubtitle.textContent = "Drive.ru: ";
    textSubtitle.textContent = "Вэн Volkswagen e-Bulli скрестил классику с современной техникой.";
    linkMedia.href = "https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html";
})