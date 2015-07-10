var RoamingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps + 1000);
  this.$node.addClass('roaming');
};

RoamingDancer.prototype = Object.create(Dancer.prototype);
RoamingDancer.prototype.constructor = RoamingDancer;
RoamingDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);

  if (!window.linedUp) {
    var newTop = Math.max($("body").height() * Math.random(), 32);
    var newLeft = $("body").width() * Math.random();
    this.move(newTop, newLeft);
  }
};

RoamingDancer.prototype.move = function(top, left) {
  this.$node.animate({
    'top': top,
    'left': left
  }, 1000);
  this.top = top;
  this.left = left;
  this.originalTop = top;
  this.originalLeft = left;
};