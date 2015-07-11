var RainbowDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('rainbow');
};

RainbowDancer.prototype = Object.create(Dancer.prototype);
RainbowDancer.prototype.constructor = RainbowDancer;

RainbowDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);
  this.setColor(this.colors[Math.floor(Math.random() * this.colors.length)]);
};
