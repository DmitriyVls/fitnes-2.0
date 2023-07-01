const videoButton = document.querySelector('.video__button');
const player = document.querySelector('.video__player');
const mask = document.querySelector('.video__mask');

videoButton.addEventListener('click', ()=>{
  player.play();
  videoButton.classList.add('video__button--hidden');
  mask.classList.remove('video__mask');
});

