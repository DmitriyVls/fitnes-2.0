import Swiper from '../js/vendor/swiper';
// eslint-disable-next-line no-new
new Swiper('.swiper', {
  navigation: {
    nextEl: '.slider__button--right',
    prevEl: '.slider__button--left',
  },
});
