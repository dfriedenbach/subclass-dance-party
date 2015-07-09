var SwingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps + 600);
  this.paired = false;
};

SwingDancer.prototype = Object.create(Dancer.prototype);
SwingDancer.prototype.constructor = SwingDancer;
SwingDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);

  if (!window.linedUp) {
    // var newTop = Math.max($("body").height() * Math.random(), 32);
    // var newLeft = $("body").width() * Math.random();
    // this.move(newTop, newLeft);
  }
};

SwingDancer.prototype.findPartner = function() {
  var dancers = window.dancers;
  var nearest = null;
  for (var i = 0; i < dancers.length; i++) {
    if (dancers[i].constructor === SwingDancer && dancers[i] !== this) {
      if (! dancers[i].paired) {
        var distance = Math.sqrt(Math.pow(this.top - dancers[i].top, 2) + Math.pow(this.left - dancers[i].left, 2));
        if (! nearest || distance < nearest.distance) {
          nearest = {dancer: dancers[i], distance: distance};
        }
      }
    }
  }
  return nearest;
}
