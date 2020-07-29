import '../styles/main.sass';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';


/*** Navigation ***/

const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
  nav.classList.toggle('nav-show');
});

document.addEventListener('click', e => {
  if (e.target.closest('.nav')) {
    if (e.target.className === 'nav-link') {
      nav.classList.remove('nav-show');
    } else {
      return;
    }
  }
  nav.classList.remove('nav-show');
});


/*** Gallery  ***/

Swiper.use([Navigation, Pagination, Autoplay]);

const swiperGallery = new Swiper('.swiper-container-gallery', {
  slidesPerView: 1.25,
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    600: {
      slidesPerView: 2.25,
      spaceBetween: 20,
      centeredSlides: true
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: false
    }
  }
});


/*** Testimonial ***/

const swiperTesti = new Swiper('.swiper-container-testimonial', {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});