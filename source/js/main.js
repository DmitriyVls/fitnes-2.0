import Swiper from '../js/vendor/swiper';
import {Tabs} from './tabs';
import {Accordions} from './accordions';

// eslint-disable-next-line no-new
new Swiper('.swiper', {
  navigation: {
    nextEl: '.slider__button--right',
    prevEl: '.slider__button--left',
  },
});
// eslint-disable-next-line no-new
new Swiper('.trainers__container', {
  observer: true,
  slidesPerView: 4,
  loop: true,
  spaceBetween: 44,
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
    320: {
      slidesPerView: 1,
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


let tabs;

const initTabs = () => {
  tabs = new Tabs();
  // Используйте в разработке экспортируемую переменную tabs, window сделан для бэкэнда
  window.tabs = tabs;
};

export {initTabs, tabs};

initTabs();

let accordions;

const initAccordions = () => {
  accordions = new Accordions();
  // Используйте в разработке экспортируемую переменную accordions, window сделан для бэкэнда
  window.accordions = accordions;
};

export {initAccordions, accordions};

initAccordions();


const heroButton = document.querySelector('.hero__button');
const offerSection = document.querySelector('.offer');

const scrollTo = (el) => {
  window.scroll({
    left: 0,
    top: el.offsetTop,
    behavior: 'smooth',
  });
};

heroButton.addEventListener('click', () => {
  scrollTo(offerSection);
});
