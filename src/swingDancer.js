var SwingDancer = function(top, left, timeBetweenSteps) {
  // paired and partner need to be initialized prior to the first step call, which happens in Dancer.call
  this.paired = false;
  this.partner = null;
  Dancer.call(this, top, left, timeBetweenSteps + 600);
};

SwingDancer.prototype = Object.create(Dancer.prototype);
SwingDancer.prototype.constructor = SwingDancer;
SwingDancer.prototype.step = function(timeBetweenSteps){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps);

  if (!window.linedUp) {
    if (this.paired) {
      if (this.role === 'lead') {
        // Twirl!
        
      }
    } else {
      var nearest = this.findPartner();
      if (nearest) {
        if (nearest.distance < 75) {
          // pair up
          this.askToDance(nearest.dancer);
        } else {
          // move closer
          var newTop = this.top + 0.25 * (nearest.dancer.top - this.top);
          var newLeft = this.left + 0.25 * (nearest.dancer.left - this.left);
          this.move(newTop, newLeft);
        }
      } else {
        // default unpaired behavior
      }
    }
    // var newTop = Math.max($("body").height() * Math.random(), 32);
    // var newLeft = $("body").width() * Math.random();
    // this.move(newTop, newLeft);
  }
};

// Finds nearest unpaired swing dancer
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
};

SwingDancer.prototype.askToDance = function(partner) {
  if (! (this.paired || partner.paired)) {
    this.paired = true;
    this.partner = partner;
    this.role = 'lead';
    partner.paired = true;
    partner.partner = this;
    partner.role = 'follow';
  }
};

