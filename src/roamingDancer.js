var RoamingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps + 600);
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
