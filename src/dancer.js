// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.originalTop = top;
  this.originalLeft = left;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  this.setPosition(top, left);
  this.step(timeBetweenSteps);
  this.setColor(this.colors[Math.floor(Math.random() * this.colors.length)]);
  // this one sets the position to some random default point within the body
};

Dancer.prototype.step = function(timeBetweenSteps){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var that = this;
  setTimeout(function() {
    that.step.call(that, timeBetweenSteps);}, 
    timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'violet'];

Dancer.prototype.setColor = function(color) {
  this.$node.css('border-color', color);
};

Dancer.prototype.lineUp = function(top, left) {
  // this.prevTop = this.top;
  // this.prevLeft = this.left;
  this.setPosition(top, left);
};