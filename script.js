$(function () {
  $(document).ready(function () {
    $('body').hide().fadeIn(2000);
  });

  $('.image').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 30000,
    prevArrow: '<img src="arrows/sliderbuttonLeft.png" class="prev">',
    nextArrow: '<img src="arrows/sliderbuttonRigth.png" class="next">',
    dots: false
  });
})
// $(function () {

// })