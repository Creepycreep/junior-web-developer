'use strict';

window.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 1;

  showSlides(slideIndex);

  function nextSlide() {
    showSlides(slideIndex += 1);
  }

  function previousSlide() {
    showSlides(slideIndex -= 1);
  }

  function showSlides(n) {
    let slides = document.querySelectorAll('.gallery__slide'),
      indicators = document.querySelectorAll('.slide__indicator');

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      indicators[i].classList.remove('active');
    }

    slides[slideIndex - 1].style.display = "block";
    indicators[slideIndex - 1].classList.add('active');

  }

  let next = document.querySelector('.next'),
    prev = document.querySelector('.prev');

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', previousSlide);


});