const openNav = document.querySelector('.header__menu-image');
const navigation = document.querySelector('.header__navigation');
const logo = document.querySelector('.header__place-logo');
const menu = document.querySelector('.header__menu-image');
const closeButtot = document.querySelector('.header__close-novigation');

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