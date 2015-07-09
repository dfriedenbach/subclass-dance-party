var JumpDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

JumpDancer.prototype = Object.create(Dancer.prototype);
JumpDancer.prototype.constructor = JumpDancer;
JumpDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({'top': (this.top - 15)}, 'fast');
  this.$node.animate({'top': this.top}, 'fast');

};