var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps)
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;
makeBlinkyDancer.prototype.step = function(){
    // makeDancer.prototype.step.call(this);
    this.oldStep();
    this.$node;
};
makeBlinkyDancer.prototype.spazOut = function() {
  console.log("I am running on line 23");
  this.oldStep();
  var horzposition = $("body").width() * Math.random();
  var vertposition = $("body").width() * Math.random();

  var borderStyle = {
    'top' : vertposition + 'px',
    'left' : horzposition + 'px'
  };

  this.$node.animate(borderStyle, 500);
  this.$node.addClass("moving-dancer")
};


