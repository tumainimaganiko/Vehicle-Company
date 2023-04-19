const xMark = document.querySelector('.x-mark');
const openMenu = document.querySelector('.hamburger');

xMark.addEventListener('click', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const head = document.querySelector('header');
  mobileMenu.style.display = 'none';
  head.style.display = 'block';
});

openMenu.addEventListener('click', () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  const head = document.querySelector('header');
  mobileMenu.style.display = 'block';
  head.style.display = 'none';
});

const investors = [
  {
    img: 'images/reagan.png',
    heading: 'Frank Paul',
    info: 'Engineer in TESLA',
    details:
      'He supports us in importing and exporting Cars in any part of the world',
  },
  {
    img: 'images/julia.png',
    heading: 'Agnes Barnabas',
    info: 'Designer at GOOGLE',
    details:
      'She supports us in importing and exporting Cars in any part of the world',
  },
  {
    img: 'images/kilnam.png',
    heading: 'Peter Paul',
    info: 'Manager at BARCLAYS',
    details:
      'He supports us in importing and exporting Cars in any part of the world',
  },
  {
    img: 'images/lila.png',
    heading: 'Oyedepo Elia',
    info: 'Engineer at TOYOTA',
    details:
      'He supports us in importing and exporting Cars in any part of the world',
  },
  {
    img: 'images/yochai.png',
    heading: 'Tumaini Maganiko',
    info: 'Student at Microverse',
    details:
      'He supports us in importing and exporting Cars in any part of the world',
  },
  {
    img: 'images/sohyeong.png',
    heading: 'John Barnabas',
    info: 'Engineer at TESLA',
    details:
      'He supports us in importing and exporting Cars in any part of the world',
  },
];

const featured = document.querySelector('.partcipants');

investors.forEach((value) => {
  const div = document.createElement('div');
  div.className = 'd-flex align-items-center';
  div.innerHTML = `
    <div class="x-shade">
      <img src="${value.img}" alt="Investor">
      <div class="inner-div"></div>
    </div>
    <div class="content">
        <h3>${value.heading}</h3>
        <p class="info">${value.info}</p>
        <p>${value.details}</p>
    </div>
    `;
  featured.appendChild(div);
});
