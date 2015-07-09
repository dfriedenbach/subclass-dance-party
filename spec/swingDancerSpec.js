describe("swingDancer", function() {

  var swingDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    window.dancers = [];
    clock = sinon.useFakeTimers();
    swingDancer = new SwingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(swingDancer.$node).to.be.an.instanceof(jQuery);
  });

  // it("should have a step function that makes its node blink", function() {
  //   sinon.spy(swingDancer.$node, 'toggle');
  //   swingDancer.step();
  //   expect(swingDancer.$node.toggle.called).to.be.true;
  // });

  describe("findPartner", function(){
    it("should find the distance to the nearest available partner", function(){
      var dancer1 = new SwingDancer(100, 200, timeBetweenSteps);
      var dancer2 = new SwingDancer(50, 100, timeBetweenSteps);
      var dancer3 = new SwingDancer(500, 600, timeBetweenSteps);

      var nearest = swingDancer.findPartner();
      expect(nearest.dancer).to.equal(dancer2);
    });

    it("should ignore paired dancers", function(){
      var dancer1 = new SwingDancer(100, 200, timeBetweenSteps);
      var dancer2 = new SwingDancer(50, 100, timeBetweenSteps);
      dancer2.paired = true;
      var dancer3 = new SwingDancer(500, 600, timeBetweenSteps);

      var nearest = swingDancer.findPartner();
      expect(nearest.dancer).to.equal(dancer1);
    });

    it("should return null if no unpaired dancer is available", function(){
      var dancer1 = new SwingDancer(100, 200, timeBetweenSteps);
      dancer1.paired = true;
      var dancer2 = new SwingDancer(50, 100, timeBetweenSteps);
      dancer2.paired = true;
      var nearest = swingDancer.findPartner();
      expect(nearest).to.equal(null);
    });

    it("should return null if there are no other swingDancers", function(){
      var nearest = swingDancer.findPartner();
      expect(nearest).to.equal(null);
    });

    it("should pair with dancer within threshold distance", function(){
      var dancer1 = new SwingDancer(50, 50, timeBetweenSteps);
      // swingDancer.step(timeBetweenSteps);
      // expect(swingDancer.partner).to.equal(dancer1);
      expect(dancer1.partner).to.equal(swingDancer);
    });



  });
});
