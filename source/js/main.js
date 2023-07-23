import Swiper from '../js/vendor/swiper';
// eslint-disable-next-line no-new
new Swiper('.swiper', {
  navigation: {
    nextEl: '.slider__button--right',
    prevEl: '.slider__button--left',
  },
});
// eslint-disable-next-line no-new
new Swiper('.trainers__slider', {
  navigation: {
    nextEl: '.slider__button--right',
    prevEl: '.slider__button--left',
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
