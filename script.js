  //yes button
$('.yesbutton').on('click', function() {
  $('.responseimage1').attr('src', 'https://media.giphy.com/media/3t7RAFhu75Wwg/giphy.gif');
  $('.message').text('WHY!');
});

//Thank god you can sympathize with a falcons fan
$('.nobutton').on('click', function() {
  $('.responseimage1').attr('src', 'http://i.imgur.com/sZCB8A9.gif');
  $('.message').text('I guess the Falcons will be back next year...');
});

