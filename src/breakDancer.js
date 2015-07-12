var BreakDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, 1000);
  this.$node.addClass('break');
};

BreakDancer.prototype = Object.create(Dancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;

BreakDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.removeClass('front-flip spin-flip rev-spin-flip floor-spin rev-floor-spin head-spin');
  this.danceMoves[Math.floor(Math.random() * this.danceMoves.length)].call(this);
};

BreakDancer.prototype.danceMoves = [
  function() {
    this.$node.addClass('front-flip');
  },
  function() {
    this.$node.addClass('spin-flip');
  },
  function() {
    this.$node.addClass('rev-spin-flip');
  },
  function() {
    this.$node.addClass('floor-spin');
  },
  function() {
    this.$node.addClass('rev-floor-spin');
  },
  function() {
    this.$node.addClass('head-spin')
  }
]