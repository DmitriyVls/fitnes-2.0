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

const video = document.querySelector('.video');

function setupVideo() {
  let button = video.querySelector('.video__button');
  let videoPrev = video.querySelector('.video__wrapper');
  button.addEventListener('click', () => {
    let iframe = createIframe();

    videoPrev.remove();
    button.remove();
    video.appendChild(iframe);
  });

  video.classList.add('video--enabled');
}

function createIframe() {
  let iframe = document.createElement('iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw');

  iframe.classList.add('video__media');

  return iframe;
}

setupVideo();
