var ShyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  var thisDancer = this;
  this.$node.addClass('shy');
  this.$node.on('mouseover', function(event) {
    var newTop = thisDancer.top + Math.random() * 300 - 150;
    var newLeft = thisDancer.left + Math.random() * 300 - 150; 
    thisDancer.move(newTop, newLeft);
  });
};

ShyDancer.prototype = Object.create(Dancer.prototype);
ShyDancer.prototype.constructor = ShyDancer;

ShyDancer.prototype.step = function(timeBetweenSteps){
  // Do nothing - too shy to dance!
};
