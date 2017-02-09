  //yes button
$('.yes').on('click', function() {
  $('.responseimage1').attr('src', 'http://binaryapi.ap.org/8ac7986e05c9475b85b9a700556a4399/460x.jpg');
  $('.message').text('Great Choice!');
});

//no button
$('.no').on('click', function() {
  $('.responseimage1').attr('src', 'https://media.giphy.com/media/3o7qDWoeN6PaJ6Z6RW/giphy.gif');
  $('.message').text('It is not too late to change yourmind');
});
