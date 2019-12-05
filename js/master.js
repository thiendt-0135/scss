/* eslint-disable no-var */
// carousel list post in featured-posts

$('.js-featured').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  dots: true,
  appendDots: $('.featured-posts__controls'),
  dotsClass: 'custom-dots',
  customPaging: function(slider, i) {
    return '<span class="custom-dots__dot" role="button"></span>';
  },
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// carousel list image in instagram

$('.js-post-item').slick({
  autoplay: true,
  infinite: true,
  autoplaySpeed: 5000,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows: false,
});

// handle event back to top

$('#js-ontop').click(function() {
  $('html').animate({scrollTop: 0}, 1000);
});

// handle truncate in preview text

$.truncateMe({
  elem: '.js-content-preview',
  trimTo: 18,
  add: '...',
});

$('.js-featured-posts-carousel').line(2, '...');

// responsive menu

$('.js-close').click(function() {
  $('.js-menu-left').removeClass('menu__left--show');
});

$('.js-open').click(function() {
  $('.js-menu-left').addClass('menu__left--show');
});

$('.js-social-button').click(function() {
  $('.social').toggleClass('show');
});

$('body').click(function(event) {
  if ($('.js-menu-left').hasClass('menu__left--show')) {
    var menu = document.querySelector('.js-menu-left');
    var target = event.target.closest('.js-menu-left');
    var target2 = event.target.closest('.js-open');
    var btnOpen = document.querySelector('.js-open');
    if (target !== menu && target2 !== btnOpen) {
      $('.js-menu-left').removeClass('menu__left--show');
    }
  }

  if ($('.social').hasClass('show')) {
    var social = document.querySelector('.js-social-button');
    var target = event.target.closest('.js-social-button');
    if (target !== social) {
      $('.social').toggleClass('show');
    }
  }
});

$('.js-nav-link').click(function() {
  $(this).toggleClass('active').next().slideToggle();
  $(this).parent().siblings().children('.js-nav-child').slideUp();
  $(this).parent().siblings().children('.js-nav-link').removeClass('active');
});
