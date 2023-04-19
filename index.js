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

const investors = [
    {
        img: "images/forest engineer.jpeg",
        heading: "Frank Paul",
        details: "He supports us in importing and exporting Cars in any part of the world"
    },
    {
        img: "images/girl engineer.jpeg",
        heading: "Agnes Barnabas",
        details: "She supports us in importing and exporting Cars in any part of the world"
    },
    {
        img: "images/spectacles engineer.jpeg",
        heading: "Peter Paul",
        details: "He supports us in importing and exporting Cars in any part of the world"
    },
    {
        img: "images/male engineer.jpeg",
        heading: "Oyedepo Elia",
        details: "He supports us in importing and exporting Cars in any part of the world"
    },
    {
        img: "images/2maini.jpg",
        heading: "Tumaini Maganiko",
        details: "He supports us in importing and exporting Cars in any part of the world"
    },
    {
        img: "images/spectacles engineer.jpeg",
        heading: "John Barnabas",
        details: "He supports us in importing and exporting Cars in any part of the world"
    }
]

const featured = document.querySelector('.partcipants');

investors.forEach((value,index) => {
    const div = document.createElement('div');
    div.className = 'd-flex align-items-center';
    div.innerHTML = `
    <img src="${value.img}" alt="">
    <div class="content">
        <h3>${value.heading}</h3>
        <p>${value.details}</p>
    </div>
    `
    featured.appendChild(div);
})