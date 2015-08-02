var carouselOptions = {
  collection: ['images/one.jpg', 'images/two.jpg', 'images/three.jpg', 'images/four.jpg', 'images/five.jpeg', 'images/six.jpg'],
  startingImage: 0, // optional: index of starting image
  dotClass: 'dot', // optional classname for dots
  useDots: true, // optional use dots true/false
  speed: 1000, // optional in milliseconds
  direction: 'forward', // optional: forward/backward/random
  onChange: function() {console.log('Image Changed')}, // Triggered when carousel image changes
  onDotClick: function() {console.log('Dot Clicked')}, // Triggered when dot is clicked
  onStart: function() {console.log('Carousel Started')}, // Triggered when carousel is loaded
  onStop: function() {console.log('Carousel Stopped')} // Triggered when carousel is loaded
};

$('.carousel').jqueryCarousel(carouselOptions);
