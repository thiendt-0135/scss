// carousel list post in featured-posts

$('.js-featured').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  arrows: false,
  dots: true,
  appendDots: $('.slide-controls'),
  dotsClass: 'custom-dots',
  customPaging: function(slider, i) {
    return '<span class="custom-dots__dot" role="button"></span>';
  },
});

// carousel list image in instagram

$('.js-post-item').slick({
  slidesToShow: 1,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 5000,
  fade: true,
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

$('.js-featured-posts').line(2, '...');
