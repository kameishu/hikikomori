"use strict";

const FADEIN_ELEM = document.getElementById('fadein');

window.addEventListener('load', () => {
    const FADEIN_ELEM_TOP = FADEIN_ELEM.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > FADEIN_ELEM_TOP) {
        FADEIN_ELEM.classList.add('fadein-after');
    }else{
        FADEIN_ELEM.classList.remove('fadein-after');
    }
});

let fadeInTarget = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const topRect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = topRect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});

$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }

  });
});

$(function() {
  $('.hamburger').click(function() {
    $('.globalMenuSp').addClass('block');
  });
});

$(function() {
  $('.globalMenuSp').click(function() {
    $(this).removeClass('active');
    $('.hamburger').removeClass('active');
  });
});