$('.js-scrollto').on('click touch', function () {

  $("html, body").animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 1000);
  return false;
})

$('.info__wrapper--top,.container--products').addClass('animated');

var windowHeight = $(window).height();
var offset = 0;
if ($(window).width() < 768) {
  offset = 100;
}
$(window).on('resize', function () {
  windowHeight = $(window).height();
  if ($(window).width() < 768) {
    offset = 100;
  }
});

var scrollTop = $(window).scrollTop();
$(window).on('scroll', checkScroll);

function checkScroll() {
  scrollTop = $(window).scrollTop() + windowHeight;
  $.each($('.js-transform'), function () {
    if ($(this).hasClass('animated')) {
      return;
    }
    if (scrollTop > $(this).offset().top - offset) {
      $(this).addClass('animated');
    }
  })
}
checkScroll();