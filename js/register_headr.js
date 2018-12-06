$('.help_center').hover(function () {
  $(this).children('.ul_li').stop().fadeIn(600);
}, function () {
  $(this).children('.ul_li').stop().fadeOut();
});