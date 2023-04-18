const xMark = document.querySelector('.x-mark');
const openMenu = document.querySelector('.hamburger')

xMark.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const head = document.querySelector('header');
    mobileMenu.style.display = 'none';
    head.style.display = 'block';
})

openMenu.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const head = document.querySelector('header');
    mobileMenu.style.display = 'block';
    head.style.display = 'none';
})