var BreakDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, 1000);
  this.$node.addClass('break');
};

BreakDancer.prototype = Object.create(Dancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;

BreakDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.animate({'top': (this.top - 35)}, 'fast');
  this.$node.animate({'top': this.top}, 'fast');

};