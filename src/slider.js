var Slider = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
};

Slider.prototype = Object.create(makeDancer.prototype);
Slider.prototype.constructor = Slider;
Slider.prototype.oldStep = makeDancer.prototype.step;
Slider.prototype.step = function() {
  this.oldStep()
  this.$node.toggle();
}
