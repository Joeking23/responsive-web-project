const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');
const body = document.getElementById("body");
hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

