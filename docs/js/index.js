// INTRO Animatio

$( document ).ready(function() {
    $('.slideshow').height($('.first').height());
    $('.the_box').delay(1500).fadeIn(1000);
    $('.the_box').delay(2000).fadeOut(1000);
    $('.video-foreground iframe').delay(5000).fadeIn(1000);
    $('.white_arrow').delay(6000).fadeIn(1000);
});

// navbar and footer Animation
$(window).on( "scrollstop",  function() {
    if ($('section').visible( true )) {
      $('nav').animate({ 'backgroundColor': 'rgba(0, 0, 0, 0)' },200);
      $('footer').animate({ 'backgroundColor': 'rgba(0, 0, 0, 0)' },200);
    } else {
      $('nav').animate({ 'backgroundColor': 'rgba(0, 0, 0, 1)' },200);
      $('footer').animate({ 'backgroundColor': 'rgba(0, 0, 0, 1)' },200);
    }
});

var scroll = new SmoothScroll('a[href*="#"]');


//About slideshow

$(".slideshow > div:gt(0)").hide();

setInterval(function() {
  $('.slideshow > div:first')
    .stop().fadeTo('1500',0)
    .next()
    .stop().fadeTo('1500',1)
    .end()
    .appendTo('.slideshow');
}, 4000);

// fix slideshow dimensions NEED A BETTER WAY OF DOING THIS
window.onresize = function(event) {
    $('.slideshow').height($('.first').height());
};

//donate slideshow
$(window).on( "scrollstop",  function() {
  if ($('.listContainer').visible( true )) {
    $('.listContainer').stop().animate({ scrollTop: 0 }, 400);
    $('.listContainer').delay(500).animate({ scrollTop: $('.list').prop('scrollHeight') }, 7000);
  }
});
