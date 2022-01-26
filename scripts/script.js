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