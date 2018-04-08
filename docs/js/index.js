// INTRO Animatio

$( document ).ready(function() {
    $('.the_box').delay(1500).fadeIn(1000);
    $('.the_box').delay(2000).fadeOut(1000);
    $('.video-foreground iframe').delay(5000).fadeIn(1000);
    $('.white_arrow').delay(6000).fadeIn(1000);
});


// NAVBAR Animation
$(window).on( "scrollstop",  function() {
    if ($('section').visible( true )) {
      $('nav').animate({ 'backgroundColor': 'rgba(0, 0, 0, 0)' },300);
    } else {
      $('nav').animate({ 'backgroundColor': 'rgba(0, 0, 0, 1)' },300);
    }
});

var scroll = new SmoothScroll('a[href*="#"]');


//About slideshow

$(".slideshow > div:gt(0)").hide();

setInterval(function() {
  $('.slideshow > div:first').fadeOut(1200).next().fadeIn(1200).end().appendTo('.slideshow');
}, 6000);
