  //yes button
$('.yesbutton').on('click', function() {
  $('.responseimage1').attr('src', 'http://binaryapi.ap.org/8ac7986e05c9475b85b9a700556a4399/460x.jpg');
  $('.message').text('Great Choice!');
});

//Thank god you can sympathize with a falcons fan
$('.nobutton').on('click', function() {
  $('.responseimage1').attr('src', 'https://media.giphy.com/media/3o7qDWoeN6PaJ6Z6RW/giphy.gif');
  $('.message').text('I guess the Falcons will be back next year...');
});