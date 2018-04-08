// INTRO Animatio

$( document ).ready(function() {
    $('.the_box').delay(1500).fadeIn(1000);
    $('.the_box').delay(4000).fadeOut(1000);
    $('.white_arrow').delay(8000).fadeIn(1000);
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
