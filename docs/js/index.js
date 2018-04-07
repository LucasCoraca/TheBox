$(window).on( "scrollstop",  function() {
    console.log($('.video-foreground').visible( true ));
    if ($('section').visible( true )) {
      $('nav').animate({ 'backgroundColor': 'rgba(0, 0, 0, 1)' },300);
    } else {
      $('nav').animate({ 'backgroundColor': 'rgba(0, 0, 0, 0)' },300);
    }
});
