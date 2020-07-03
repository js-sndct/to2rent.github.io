//slider + slick

  $('.header-content__slider').slick({
    fade: true,
    infinite: true,
    arrows: true,
    prevArrow: '<img class="slider-arrows-left" src="img/arrowleft.svg" alt="">',
    nextArrow: '<img class="slider-arrows-right" src="img/arrowright.svg" alt="">',
  });
//wow
  new WOW().init();
